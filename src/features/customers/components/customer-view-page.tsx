import { clientOfPrisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import CustomerForm from './customer-form';

type TCustomerViewPageProps = {
  customerId: string;
};

export default async function CustomerViewPage({
  customerId
}: TCustomerViewPageProps) {
  let customer = null;
  let pageTitle = 'Create New Customer';

  if (customerId !== 'new') {
    try {
      customer = await clientOfPrisma.customer.findUnique({
        where: { id: customerId }
      });

      if (!customer) {
        notFound();
      }
      pageTitle = `Edit Customer: ${customer.name}`;
    } catch (error) {
      console.error('Error fetching customer:', error);
      notFound();
    }
  }

  return <CustomerForm initialData={customer} pageTitle={pageTitle} />;
}
