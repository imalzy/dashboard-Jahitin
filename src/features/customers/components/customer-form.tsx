'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ICustomer } from '@/types/customer';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Customer name must be at least 2 characters.'
  }),
  phone: z.string().min(2, {
    message: 'Customer phone must be at least 2 characters.'
  }),
  notes: z.string().optional(),
  address: z.string().optional()
});

export default function CustomerForm({
  initialData,
  pageTitle
}: {
  initialData: ICustomer | null;
  pageTitle: string;
}) {
  const defaultValues = {
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    notes: initialData?.notes || '',
    address: initialData?.address || ''
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: defaultValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const url = initialData
        ? `/api/customers/${initialData.id}`
        : '/api/customers';
      const method = initialData ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          notes: values.notes || null,
          address: values.address || null
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        toast.error('Failed to add customer. Please try again.');
        return;
      }

      // Success handling
      const successMessage = initialData
        ? 'Customer updated successfully!'
        : 'Customer added successfully!';
      console.log(successMessage);
      toast.success(successMessage);

      if (!initialData) {
        form.reset({ name: '', phone: '', address: '', notes: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {pageTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter customer name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Phone</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter customer phone' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Address</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter customer address'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='notes'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter customer notes'
                      className='resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? 'Saving...'
                : initialData
                  ? 'Update Customer'
                  : 'Add Customer'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
