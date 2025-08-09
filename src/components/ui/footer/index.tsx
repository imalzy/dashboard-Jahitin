import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='text-amber-800-foreground bg-amber-800/10'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Jahitku</h3>
            <p className='text-amber-800-foreground/80 text-sm'>
              Your complete sewing solution. From premium supplies to
              professional tailoring services, we make sewing easier than ever.
            </p>
            <div className='flex items-center gap-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-amber-800-foreground hover:bg-amber-800-foreground/10'
              >
                <Facebook className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-amber-800-foreground hover:bg-amber-800-foreground/10'
              >
                <Instagram className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-amber-800-foreground hover:bg-amber-800-foreground/10'
              >
                <Twitter className='h-5 w-5' />
              </Button>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#home'
                  className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#products'
                  className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#reviews'
                  className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href='#track'
                  className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Contact Info</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span className='text-amber-800-foreground/80'>
                  +62 123 456 7890
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span className='text-amber-800-foreground/80'>
                  hello@jahitku.com
                </span>
              </div>
              <div className='flex items-start gap-2'>
                <MapPin className='mt-0.5 h-4 w-4' />
                <span className='text-amber-800-foreground/80'>
                  Jl. Sewing Street No. 123
                  <br />
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold'>Newsletter</h4>
            <p className='text-amber-800-foreground/80 text-sm'>
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className='space-y-2'>
              <Input placeholder='Enter your email' className='bg-white' />
              <Button className='bg-amber-800-foreground hover:bg-amber-800-foreground/90 w-full text-amber-800'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className='border-amber-800-foreground/20 mt-12 border-t pt-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='text-amber-800-foreground/80 text-sm'>
              © 2024 Jahitku. All rights reserved.
            </div>
            <div className='flex items-center gap-6 text-sm'>
              <a
                href='#'
                className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
              >
                Terms of Service
              </a>
              <a
                href='#'
                className='text-amber-800-foreground/80 hover:text-amber-800-foreground transition-colors'
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
