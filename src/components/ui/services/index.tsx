import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Package, Truck, Clock, Star, Shield } from 'lucide-react';
import deliveryImage from '@/assets/delivery-service.jpg';

const services = [
  {
    icon: Scissors,
    title: 'Custom Tailoring',
    description:
      'Professional tailoring services with expert craftsmanship. From alterations to custom designs.',
    features: [
      'Expert tailors',
      'Custom fitting',
      'Design consultation',
      'Quality guarantee'
    ]
  },
  {
    icon: Package,
    title: 'Sewing Supplies',
    description:
      'Complete range of premium sewing materials and tools for all your crafting needs.',
    features: [
      '10,000+ products',
      'Premium quality',
      'Competitive prices',
      'Bulk discounts'
    ]
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Quick and reliable delivery service across the city with real-time tracking.',
    features: [
      'Same-day delivery',
      'Real-time tracking',
      'Secure packaging',
      'Free shipping over Rp 500K'
    ]
  }
];

const Services = () => {
  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Our Services</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Everything you need for your sewing projects, from supplies to
            professional services.
          </p>
        </div>

        <div className='mb-16 grid items-center gap-12 lg:grid-cols-2'>
          <div className='space-y-8'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='border-0 bg-[var(--gradient-card)] shadow-[var(--shadow-soft)]'
              >
                <CardHeader>
                  <div className='flex items-center gap-4'>
                    <div className='rounded-lg bg-amber-800/10 p-3'>
                      <service.icon className='h-6 w-6 text-amber-800' />
                    </div>
                    <CardTitle className='text-xl'>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {service.description}
                  </p>
                  <ul className='space-y-2'>
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className='flex items-center gap-2'
                      >
                        <Star className='h-4 w-4 fill-current text-amber-800' />
                        <span className='text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='relative'>
            <img
              src={'/assets/delivery-service.jpeg'}
              alt='Delivery Service'
              className='w-full rounded-lg shadow-[var(--shadow-card)]'
            />
            <div className='bg-card absolute -bottom-6 -left-6 rounded-lg border p-6 shadow-[var(--shadow-card)]'>
              <div className='flex items-center gap-4'>
                <div className='bg-sage/20 rounded-full p-3'>
                  <Clock className='text-sage h-6 w-6' />
                </div>
                <div>
                  <div className='font-semibold'>Average Delivery Time</div>
                  <div className='text-2xl font-bold text-amber-800'>
                    2.5 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <div className='rounded-lg bg-[var(--gradient-accent)] p-6 text-center'>
            <Shield className='mx-auto mb-3 h-8 w-8 text-amber-800' />
            <h3 className='mb-2 font-semibold'>Quality Guarantee</h3>
            <p className='text-muted-foreground text-sm'>
              100% satisfaction guaranteed on all products and services
            </p>
          </div>

          <div className='rounded-lg bg-[var(--gradient-accent)] p-6 text-center'>
            <Star className='mx-auto mb-3 h-8 w-8 fill-current text-amber-800' />
            <h3 className='mb-2 font-semibold'>Expert Support</h3>
            <p className='text-muted-foreground text-sm'>
              Professional guidance from experienced tailors
            </p>
          </div>

          <div className='rounded-lg bg-[var(--gradient-accent)] p-6 text-center'>
            <Truck className='mx-auto mb-3 h-8 w-8 text-amber-800' />
            <h3 className='mb-2 font-semibold'>Reliable Delivery</h3>
            <p className='text-muted-foreground text-sm'>
              Fast and secure delivery to your doorstep
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
