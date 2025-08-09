import { Button } from '@/components/ui/button';
import { ArrowRight, Package, Truck, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className='relative flex min-h-screen items-center'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(/assets/hero-sewing.jpeg)` }}
      >
        <div className='from-background/95 via-background/80 to-background/40 absolute inset-0 bg-gradient-to-r' />
      </div>

      <div className='relative z-10 container mx-auto px-4 py-20'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-5xl leading-tight font-bold lg:text-6xl'>
                Your Complete
                <span className='block text-amber-800'>Sewing Solution</span>
              </h1>
              <p className='text-muted-foreground max-w-md text-lg'>
                From premium supplies to custom tailoring and fast delivery -
                Jahitku makes sewing easier than ever before.
              </p>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row'>
              <Button
                size='lg'
                className='cursor-pointer border-0 bg-amber-800 hover:bg-white hover:text-amber-800'
              >
                Shop Supplies
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='cursor-pointer border-0 text-amber-800 hover:bg-amber-800 hover:text-white'
              >
                Track Your Order
              </Button>
            </div>

            <div className='flex items-center gap-8 pt-4'>
              <div className='flex items-center gap-2'>
                <Package className='h-5 w-5 text-amber-800' />
                <span className='text-sm font-medium'>10,000+ Products</span>
              </div>
              <div className='flex items-center gap-2'>
                <Truck className='h-5 w-5 text-amber-800' />
                <span className='text-sm font-medium'>Fast Delivery</span>
              </div>
              <div className='flex items-center gap-2'>
                <Star className='h-5 w-5 fill-current text-amber-800' />
                <span className='text-sm font-medium'>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
