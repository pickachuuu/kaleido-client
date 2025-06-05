import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const layoutContainerVariants = cva(
    'grid grid-cols-1',
    {
        variants: {
            variant: {
                default: 'md:grid-cols-[1.2fr_1fr]',
                message: 'lg:grid-cols-[1fr_2fr]',
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutContainerVariants> {
    children: React.ReactNode;
}

export default function LayoutContainer({ children, variant, className, ...props }: LayoutContainerProps ) {
    return (
        <div className={cn(layoutContainerVariants({ variant, className }))}{...props}>
        {children}
        </div>
    );
}