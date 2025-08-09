import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'default' | 'outline';
  popular?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false
}: PricingCardProps) {
  return (
    <Card className={`relative h-full ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Most Popular
        </div>
      )}
      <CardHeader className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground text-sm font-medium">/month</span>
        </div>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-6 p-6 pt-0">
        <ul className="grid gap-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <Link href="/auth/sign-up" className="w-full">
            <Button
              variant={buttonVariant}
              className={`w-full ${popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}`}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
