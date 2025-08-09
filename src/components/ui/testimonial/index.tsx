import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Martinez',
    role: 'Professional Tailor',
    rating: 5,
    comment:
      'Jahitku has transformed my business! The ordering process is so simple, and delivery is always on time. The quality of supplies is exceptional.',
    avatar: 'SM'
  },
  {
    id: 2,
    name: 'Ahmad Rahman',
    role: 'Fashion Designer',
    rating: 5,
    comment:
      'I love how easy it is to track my orders. The customer service is outstanding, and they have everything I need for my design work.',
    avatar: 'AR'
  },
  {
    id: 3,
    name: 'Linda Chen',
    role: 'Hobbyist',
    rating: 5,
    comment:
      'As someone new to sewing, I appreciate the quality guidance and fast delivery. Prices are very competitive compared to physical stores.',
    avatar: 'LC'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Alterations Shop Owner',
    rating: 5,
    comment:
      'The bulk ordering system is perfect for my business. Same-day delivery has helped me serve my customers better than ever.',
    avatar: 'DK'
  }
];

const Reviews = () => {
  return (
    <section id='reviews' className='bg-muted/30 py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>What Our Customers Say</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Hear from tailors, designers, and sewing enthusiasts who trust
            Jahitku for their supplies and services.
          </p>
        </div>

        <div className='mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {reviews.map((review) => (
            <Card
              key={review.id}
              className='bg-card border-0 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]'
            >
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center gap-3'>
                  <Avatar>
                    <AvatarImage src='' />
                    <AvatarFallback className='text-primary bg-amber-800/10 font-semibold'>
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className='font-semibold'>{review.name}</div>
                    <div className='text-muted-foreground text-sm'>
                      {review.role}
                    </div>
                  </div>
                </div>

                <div className='mb-3 flex items-center gap-1'>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-current text-amber-800'
                    />
                  ))}
                </div>

                <p className='text-muted-foreground text-sm leading-relaxed'>
                  &quot;{review.comment}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='space-y-6 text-center'>
          <div className='flex items-center justify-center gap-8'>
            <div className='text-center'>
              <div className='text-3xl font-bold text-amber-800'>4.9/5</div>
              <div className='text-muted-foreground text-sm'>
                Average Rating
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-amber-800'>2,500+</div>
              <div className='text-muted-foreground text-sm'>
                Happy Customers
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl font-bold text-amber-800'>98%</div>
              <div className='text-muted-foreground text-sm'>
                Satisfaction Rate
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='flex items-center gap-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className='h-5 w-5 fill-current text-amber-800' />
              ))}
              <span className='text-muted-foreground ml-2'>
                Based on 2,500+ verified reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
