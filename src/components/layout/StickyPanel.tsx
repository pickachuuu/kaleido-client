import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const stickyPanelVariants = cva(
    'hidden lg:block sticky top-0 h-screen',
    {
        variants: {
            variant:{
                default: '',
                message: 'border-r-1 border-zinc-700'
            }
        },
        defaultVariants:{
            variant: 'default'
        }
    }
);

interface StickyPanelProps extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stickyPanelVariants> {
    children: React.ReactNode;
}

export default function StickyPanel({ children, variant, className, ...props }: StickyPanelProps) {
    return (
        <div className={cn(stickyPanelVariants({ variant, className }))} {...props}>
            {/* Search bar */}
            <div className="bg-background border-b-1 border-background p-3 text-center">
                {children}
            </div>
            {/* Scrollable content area */}
            {/* <div className="flex flex-col gap-2 p-4 h-[calc(100vh-64px)] overflow-y-auto">
        
            </div> */}
        </div>
    );
}