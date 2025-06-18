import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ChatCardVariants = cva(
    'bg-background w-full min-h-24 p-3',
    {
        variants: {
            variant: { 
                default: 'hover:bg-zinc-700'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface ChatCardProps extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ChatCardVariants>{
        children: React.ReactNode
        className?: string
        active: boolean
    }

export default function ChatCard({ children, active, className, variant, ...props }: ChatCardProps){
    return (
        <div className={cn(ChatCardVariants({ className, variant }))} {...props}>
            {children}
        </div>
    )
}

ChatCard.Content = function ChatCardHeader({ children, active, className, variant, ...props}: ChatCardProps){
    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    Profile
                </div>

                <div className='col-span-3'>
                    Icon
                </div>
            </div>
            <div>
                test test
            </div>
        </div>
    )
}