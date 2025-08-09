import {
  BarChart,
  BellRing,
  Calendar,
  Scissors,
  ShoppingBag,
  Users
} from 'lucide-react';

interface FeatureProps {
  icon: 'users' | 'shoppingBag' | 'barChart' | 'calendar' | 'scissors' | 'bell';
  title: string;
  description: string;
}

const icons = {
  users: Users,
  shoppingBag: ShoppingBag,
  barChart: BarChart,
  calendar: Calendar,
  scissors: Scissors,
  bell: BellRing
};

export function Feature({ icon, title, description }: FeatureProps) {
  const Icon = icons[icon];

  return (
    <div className="bg-background rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col gap-4">
        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
          <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
