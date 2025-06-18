import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ChatCardVariants = cva(
    'bg-background w-full min-h-36',
    {
        variants: {
            variant: { 
                default: 'hover:bg-zinc-700'
            }
        }
    }
)

interface ChatCardtype extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ChatCardVariants>{
        children: React.ReactNode
        className: string
        active: boolean
    }

export default function ChatCard({ children, active, className, variant, ...props }: ChatCardtype){
    return (
        <div className={cn(ChatCardVariants({ className, variant }))} {...props}>
            {children}
        </div>
    )
}