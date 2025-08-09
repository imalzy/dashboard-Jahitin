import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

const OrderTracking = () => {
  return (
    <section id='track' className='py-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-4xl font-bold'>Track Your Order</h2>
          <p className='text-muted-foreground mx-auto max-w-2xl text-lg'>
            Stay updated with real-time tracking of your orders. Enter your
            order ID to see the current status.
          </p>
        </div>

        <div className='mx-auto max-w-4xl'>
          <Card className='mb-8 border-0 bg-[var(--gradient-card)] shadow-[var(--shadow-card)]'>
            <CardHeader>
              <CardTitle className='text-center'>Enter Order ID</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='mx-auto flex max-w-md gap-4'>
                <Input placeholder='e.g., JHT-2024-001234' className='flex-1' />
                <Button className='bg-amber-800 hover:bg-amber-800/90'>
                  <Search className='mr-2 h-4 w-4' />
                  Track
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample tracking result */}
          <Card className='bg-card border-0 shadow-[var(--shadow-soft)]'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>Order #JHT-2024-001234</CardTitle>
                <Badge className='bg-sage/20 text-sage border-sage/30'>
                  In Transit
                </Badge>
              </div>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <h3 className='mb-3 font-semibold'>Order Details</h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>Order Date:</span>
                      <span>March 15, 2024</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>
                        Expected Delivery:
                      </span>
                      <span>March 16, 2024</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>Courier:</span>
                      <span>Jahitku Express</span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-muted-foreground'>
                        Tracking ID:
                      </span>
                      <span>JEX789012345</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className='mb-3 font-semibold'>Items Ordered</h3>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between'>
                      <span>Premium Thread Collection</span>
                      <span>1x</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Cotton Fabric Bundle</span>
                      <span>2x</span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Professional Needles Set</span>
                      <span>1x</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='mb-4 font-semibold'>Tracking Progress</h3>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='rounded-full bg-amber-800/20 p-2'>
                      <CheckCircle className='h-5 w-5 text-amber-800' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-medium'>Order Confirmed</div>
                      <div className='text-muted-foreground text-sm'>
                        March 15, 2024 - 10:30 AM
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='rounded-full bg-amber-800/20 p-2'>
                      <Package className='h-5 w-5 text-amber-800' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-medium'>Package Prepared</div>
                      <div className='text-muted-foreground text-sm'>
                        March 15, 2024 - 2:15 PM
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='bg-sage/20 rounded-full p-2'>
                      <Truck className='text-sage h-5 w-5' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-medium'>Out for Delivery</div>
                      <div className='text-muted-foreground text-sm'>
                        March 16, 2024 - 9:00 AM
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                    <div className='bg-muted rounded-full p-2'>
                      <Clock className='text-muted-foreground h-5 w-5' />
                    </div>
                    <div className='flex-1'>
                      <div className='text-muted-foreground font-medium'>
                        Delivered
                      </div>
                      <div className='text-muted-foreground text-sm'>
                        Estimated: March 16, 2024 - 12:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
