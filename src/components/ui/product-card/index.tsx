import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
const sewingSupplies = '/assets/sewing-supplies.jpeg';

const products = [
  {
    id: 1,
    name: 'Premium Thread Collection',
    price: 'Rp 299,000',
    originalPrice: 'Rp 399,000',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    image: sewingSupplies
  },
  {
    id: 2,
    name: 'Professional Sewing Kit',
    price: 'Rp 899,000',
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    badge: 'Premium',
    image: sewingSupplies
  },
  {
    id: 3,
    name: 'Fabric Bundle - Cotton Mix',
    price: 'Rp 459,000',
    originalPrice: 'Rp 599,000',
    rating: 4.7,
    reviews: 156,
    badge: 'Limited',
    image: sewingSupplies
  },
  {
    id: 4,
    name: 'Industrial Needles Set',
    price: 'Rp 129,000',
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    badge: 'New',
    image: sewingSupplies
  }
];

const ProductGrid = () => {
  return (
    <section id='products' className='bg-muted/30 py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Featured Products</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Discover our curated selection of premium sewing supplies, perfect
            for professional tailors and hobbyists alike.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => (
            <Card
              key={product.id}
              className='group border-0 bg-[var(--gradient-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]'
            >
              <CardHeader className='p-0'>
                <div className='relative overflow-hidden rounded-t-lg'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <Badge className='bg-primary text-primary-foreground absolute top-3 left-3'>
                    {product.badge}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className='space-y-3 p-4'>
                <div>
                  <CardTitle className='mb-2 text-lg font-semibold'>
                    {product.name}
                  </CardTitle>

                  <div className='mb-2 flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                      <Star className='text-primary h-4 w-4 fill-current' />
                      <span className='text-sm font-medium'>
                        {product.rating}
                      </span>
                    </div>
                    <span className='text-muted-foreground text-sm'>
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className='flex items-center gap-2'>
                    <span className='text-primary text-lg font-bold'>
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className='text-muted-foreground text-sm line-through'>
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  className='bg-primary hover:bg-primary/90 w-full'
                  size='sm'
                >
                  <ShoppingCart className='mr-2 h-4 w-4' />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button
            variant='outline'
            size='lg'
            className='border-primary text-primary hover:bg-primary hover:text-primary-foreground'
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
