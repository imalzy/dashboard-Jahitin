import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import metadata from './metadata';
import { Feature } from '@/components/ui/feature';
import { Testimonial } from '@/components/ui/testimonial';
import { PricingCard } from '@/components/ui/pricing-card';
import { ArrowRight, Package, Truck, Star } from 'lucide-react';
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
        <section id='home' className='relative flex min-h-screen items-center'>
          <div
            className='from-background to-background/50 bg-ver absolute inset-0 bg-cover bg-center bg-no-repeat bg-origin-border'
            style={{ backgroundImage: `url(assets/hero-sewing.jpeg)` }}
          >
            <div className='from-background/95 via-background/80 to-background/40 absolute inset-0 bg-gradient-to-r' />
          </div>

          <div className='relative z-10 container mx-auto px-4 py-20'>
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              <div className='space-y-8'>
                <div className='space-y-4'>
                  <h1 className='text-5xl leading-tight font-bold lg:text-6xl'>
                    Your Complete
                    <span className='block text-amber-800'>
                      Sewing Solution
                    </span>
                  </h1>
                  <p className='text-muted-foreground max-w-md text-lg'>
                    From premium supplies to custom tailoring and fast delivery
                    - Jahitku makes sewing easier than ever before.
                  </p>
                </div>

                <div className='flex flex-col gap-4 sm:flex-row'>
                  <Button
                    size='lg'
                    className='[var(--transition-smooth)] border-0 bg-amber-800 text-white hover:bg-white hover:text-amber-800'
                  >
                    Shop Supplies
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='hover:text-primary-foreground border-amber-800 text-amber-900 hover:bg-amber-800'
                  >
                    Track Your Order
                  </Button>
                </div>

                <div className='flex items-center gap-8 pt-4'>
                  <div className='flex items-center gap-2'>
                    <Package className='text-primary h-5 w-5' />
                    <span className='text-sm font-medium'>
                      10,000+ Products
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Truck className='text-primary h-5 w-5' />
                    <span className='text-sm font-medium'>Fast Delivery</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star className='text-primary h-5 w-5 fill-current' />
                    <span className='text-sm font-medium'>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}

        <section id='features' className='bg-muted/40 py-20'>
          <div className='container space-y-12'>
            <div className='space-y-4 text-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Powerful Features for Your Business
              </h2>
              <p className='text-muted-foreground mx-auto max-w-[700px] md:text-xl'>
                Everything you need to manage your dressmaking business
                efficiently.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
              <Feature
                icon='users'
                title='Customer Management'
                description='Keep track of all your customers and their preferences in one place.'
              />
              <Feature
                icon='shoppingBag'
                title='Order Tracking'
                description='Monitor orders from creation to delivery with our intuitive system.'
              />
              <Feature
                icon='barChart'
                title='Business Analytics'
                description='Make data-driven decisions with comprehensive analytics and reports.'
              />
              <Feature
                icon='calendar'
                title='Appointment Scheduling'
                description='Manage fitting appointments and never double-book again.'
              />
              <Feature
                icon='scissors'
                title='Design Catalog'
                description='Maintain a digital catalog of your designs and fabrics.'
              />
              <Feature
                icon='bell'
                title='Automated Reminders'
                description='Send automated reminders to customers about upcoming fittings.'
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id='testimonials' className='overflow-visible py-20'>
          <div className='container space-y-12'>
            <div className='space-y-4 text-center'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Trusted by Businesses Like Yours
              </h2>
              <p className='text-muted-foreground mx-auto max-w-[700px] md:text-xl'>
                Hear what our customers have to say about Jahitin Dashboard.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-3'>
              <Testimonial
                quote='Jahitin has transformed how I run my small tailoring business. I can now keep track of all my customers and orders effortlessly.'
                author='Sarah Johnson'
                role='Owner, Elite Tailoring'
                avatar='/avatars/avatar-1.png'
              />
              <Testimonial
                quote='The analytics feature has been invaluable for understanding my business trends and making better inventory decisions.'
                author='Michael Chen'
                role="Founder, Chen's Custom Apparel"
                avatar='/avatars/avatar-2.png'
              />
              <Testimonial
                quote="Since using Jahitin, I've reduced missed appointments by 80% and increased customer satisfaction significantly."
                author='Amina Patel'
                role="Director, Amina's Fashion Studio"
                avatar='/avatars/avatar-3.png'
              />
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section
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
        </section>
        {/* CTA Section */}
        <section id='contact' className='overflow-visible py-20'>
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
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-background w-full border-t py-12'>
        <div className='container grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/logo.svg'
                alt='Jahitin Logo'
                width={32}
                height={32}
                className='rounded-md'
              />
              <span className='text-lg font-bold'>Jahitin</span>
            </div>
            <p className='text-muted-foreground text-sm'>
              Empowering dressmakers with the tools they need to succeed.
            </p>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-medium'>Product</h3>
            <ul className='text-muted-foreground space-y-3 text-sm'>
              <li>
                <Link href='#features' className='hover:text-primary'>
                  Features
                </Link>
              </li>
              <li>
                <Link href='#pricing' className='hover:text-primary'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Changelog
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-medium'>Company</h3>
            <ul className='text-muted-foreground space-y-3 text-sm'>
              <li>
                <Link href='#' className='hover:text-primary'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='#contact' className='hover:text-primary'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-medium'>Legal</h3>
            <ul className='text-muted-foreground space-y-3 text-sm'>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-primary'>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt8 container border-t px-4 pt-8'>
          <p className='text-muted-foreground text-center text-sm'>
            © {new Date().getFullYear()} Jahitin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
