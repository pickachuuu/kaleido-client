import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const stickyPanelVariants = cva(
    'sticky top-0 h-full bg-white/10 backdrop-blur-md border-l border-white/10 text-white shadow-md',
    {
        variants: {
            variant: {
                default: '',
                glass: 'bg-white/10 backdrop-blur-md border-l border-white/10 text-white shadow-md',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

interface StickyPanelProps extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stickyPanelVariants> {
    children: React.ReactNode;
}

export default function StickyPanel({ children, variant, className, ...props }: StickyPanelProps) {
    return (
        <aside className={cn(stickyPanelVariants({ variant, className }))} {...props}>
            {/* Search bar */}
                {children}
            {/* Scrollable content area */}
            {/* <div className="flex flex-col gap-2 p-4 h-[calc(100vh-64px)] overflow-y-auto">
        
            </div> */}
        </aside>
    );
}