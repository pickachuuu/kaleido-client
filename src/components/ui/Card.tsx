import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const CardVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'rounded-xl bg-white/5 border border-white/10 text-white shadow-xl',
        outline: 'border border-[var(--accent-secondary)] rounded-xl p-2 bg-white/10 backdrop-blur-sm text-white',
        notif: 'border-b border-[var(--accent-secondary)]',
        glass: 'rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 text-white shadow-xl',
      },
      size: {
        default: 'w-82',
        auth: 'w-full',
        notif: 'h-auto w-full',
        sm: 'h-54 w-64',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const CardHeaderVariants = cva(
  'font-semibold mb-4',
  {
    variants: {
      size: {
        default: 'text-lg',
        sm: 'text-base',
        lg: 'text-3xl',
        xl: 'text-5xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof CardVariants> {
    children: React.ReactNode;
    className?: string;
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    size?: VariantProps<typeof CardHeaderVariants>['size'];
}

export default function Card({ children, className, variant, size, ...props}: CardProps) {
    return (
        <div className={cn(CardVariants({variant, className, size}))} {...props}>
            {children}
        </div>
    );
};

Card.Header = function CardHeader({ children, className, size, ...props }: CardHeaderProps) {
    return (
        <div className={cn(CardHeaderVariants({ size, className }))} {...props}>
            {children}
        </div>
    );
};

Card.Content = function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={cn("text-white", className)} {...props}>
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