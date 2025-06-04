import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const CardVariants = cva(
  'rounded-lg p-6',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border-1 border-zinc-900',
      },
      size: {
        default: 'w-56',
        auth: 'w-96',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof CardVariants> {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className, variant, size, ...props}: CardProps) {
    return (
        <div className={cn(CardVariants({variant, className, size}))} {...props}>
            {children}
        </div>
    );
};

Card.Header = function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={`text-lg font-semibold mb-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.Content = function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={`text-primary ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.Footer = function CardFooter({ children, className }: CardProps) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};