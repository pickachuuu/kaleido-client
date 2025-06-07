import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ScrollableContentVariants = cva(
    'flex flex-col h-[calc(100vh-64px)] overflow-y-auto',
    {
        variants: {
            variant: {
                default: ''
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

interface ScrollableContentProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ScrollableContentVariants>{
        children: React.ReactNode;
        className?: string;
}

export default function ScrollableContent( {children, variant, className, ...props }: ScrollableContentProps){
    return (
        <div className={cn(ScrollableContentVariants({ variant, className }))} {...props}>
            {children}
        </div>
    )
}
