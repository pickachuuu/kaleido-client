import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const mainLayoutVariants = cva(
    'min-h-screen border-zinc-700',
    {
        variants: {
            variant: {
                default:'border-x-1 md:border-l-1 md:min-w-xl max-w-2xl',
                message:'border-l-1 md:border-x-1 md:min-w-96 max-w-xl',
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
            <div className="col-span-3 bg-foreground/0 backdrop-blur-md p-3 sticky top-0 z-10">
                {children}
            </div>
        </div>
    );
}