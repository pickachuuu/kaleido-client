import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const mainLayoutVariants = cva(
    'min-h-screen border-zinc-700',
    {
        variants: {
            variant: {
                default:'border-l-1 sm:border-x-1 md:min-w-[36rem]',
                message:'border-l-1 sm:border-x-1 md:min-w-sm max-w-xl',
            },
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mainLayoutVariants> {
    children: React.ReactNode;
}

export default function MainLayout({ 
    children, 
    variant,
    className,
    ...props 
}: MainLayoutProps) {
    return (
        <div className={cn(mainLayoutVariants({ variant, className }))} {...props}> 
                {children}
        </div>
    );
}