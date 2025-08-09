import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { QuoteIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export function Testimonial({ quote, author, role, avatar }: TestimonialProps) {
  // Get author initials for the avatar fallback
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="flex flex-col gap-4 p-6">
        <QuoteIcon className="h-8 w-8 text-primary/40" />
        <p className="text-muted-foreground">{quote}</p>
        <div className="mt-auto flex items-center gap-4 pt-4">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
