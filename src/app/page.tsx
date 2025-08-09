import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import metadata from './metadata';
import { Feature } from '@/components/ui/feature';
import Reviews from '@/components/ui/testimonial';
import { PricingCard } from '@/components/ui/pricing-card';
import { ArrowRight, Package, Truck, Star } from 'lucide-react';
import ProductGrid from '@/components/ui/product-card';
import Services from '@/components/ui/services';
import OrderTracking from '@/components/ui/order-tracking';
import Footer from '@/components/ui/footer';
import Hero from '@/components/ui/hero';
// import heroImage from "@/assets/hero-sewing.jpg";

export { metadata };

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Header */}
      <header className='bg-background/95 bard/80 border-border sticky top-0 z-50 border-b backdrop-blur-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-8'>
              <h1 className='text-2xl font-bold text-amber-800'>Jahitku</h1>

              <nav className='hidden items-center space-x-6 md:flex'>
                <a
                  href='#home'
                  className='text-foreground transition-colors hover:text-amber-800'
                >
                  Home
                </a>
                <a
                  href='#products'
                  className='text-foreground transition-colors hover:text-amber-800'
                >
                  Products
                </a>
                <a
                  href='#services'
                  className='text-foreground transition-colors hover:text-amber-800'
                >
                  Services
                </a>
                <a
                  href='#reviews'
                  className='text-foreground transition-colors hover:text-amber-800'
                >
                  Reviews
                </a>
                <a
                  href='#track'
                  className='text-foreground transition-colors hover:text-amber-800'
                >
                  Track Order
                </a>
              </nav>
            </div>

            <div className='flex items-center space-x-4'>
              <Link href='/auth/sign-in'>
                <Button
                  className='cursor-pointer text-amber-800'
                  variant='outline'
                  size='sm'
                >
                  Sign In
                </Button>
              </Link>
              <Link href='/auth/sign-up'>
                <Button className='cursor-pointer bg-amber-800' size='sm'>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className='flex-1'>
        {/* Hero Section */}
        <Hero />

        <ProductGrid />

        {/* Testimonials Section */}
        <Services />
        {/* Pricing Section */}
        {/*<section
          id='
          pricing'
          className='bg-muted/40 w-full overflow-visible py-20'
        >
          <div className='container space-y-12'>
            <div className='space-y-4 text-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Simple, Transparent Pricing
              </h2>
              <p className='text-muted-foreground mx-auto max-w-[700px] md:text-xl'>
                Choose the plan that fits your business needs.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
              <PricingCard
                title='Starter'
                price='$29'
                description='Perfect for solo dressmakers just starting out.'
                features={[
                  'Up to 50 customers',
                  'Basic order tracking',
                  'Simple analytics',
                  'Email support'
                ]}
                buttonText='Start Free Trial'
                buttonVariant='outline'
                popular={false}
              />
              <PricingCard
                title='Professional'
                price='$79'
                description='Ideal for growing dressmaking businesses.'
                features={[
                  'Up to 500 customers',
                  'Advanced order management',
                  'Comprehensive analytics',
                  'Appointment scheduling',
                  'Priority support'
                ]}
                buttonText='Start Free Trial'
                buttonVariant='default'
                popular={true}
              />
              <PricingCard
                title='Enterprise'
                price='$149'
                description='For established businesses with multiple staff.'
                features={[
                  'Unlimited customers',
                  'Complete order lifecycle management',
                  'Advanced reporting & forecasting',
                  'Multi-user access',
                  'Design catalog management',
                  'Dedicated account manager'
                ]}
                buttonText='Contact Sales'
                buttonVariant='outline'
                popular={false}
              />
            </div>
          </div>
        </section>*/}
        <Reviews />
        {/* CTA Section */}
        {/*<section id='contact' className='overflow-visible py-20'>
          <div className='container'>
            <div className='bg-primary text-primary-foreground rounded-lg px-8 py-12 md:px-12 md:py-16'>
              <div className='grid gap-8 md:grid-cols-2 md:gap-12'>
                <div className='space-y-4'>
                  <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                    Ready to Transform Your Business?
                  </h2>
                  <p className='text-primary-foreground/90 md:text-lg'>
                    Join thousands of dressmakers who are growing their business
                    with Jahitin Dashboard. Start your free 14-day trial today.
                  </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-4'>
                  <Link href='/auth/sign-up'>
                    <Button size='lg' variant='secondary'>
                      Start Free Trial
                    </Button>
                  </Link>
                  <p className='text-primary-foreground/80 text-sm'>
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        <OrderTracking />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
