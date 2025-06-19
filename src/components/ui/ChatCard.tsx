import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import ProfileAvatar from './ProfileAvatar';

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

interface ChatCardContentProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string
}

function ChatCard({ children, active, className, variant, ...props }: ChatCardProps){
    return (
        <div className={cn(ChatCardVariants({ className, variant }))} {...props}>
            {children}
        </div>
    )
}

ChatCard.Content = function ChatCardHeader({ className, ...props}: ChatCardContentProps){
    return (
    <div>
        <div className='grid grid-cols-5'>
            <div className='col-span-2'>
                <ProfileAvatar profileUrl='/images/Logo/kaleido.png'/>
            </div>
            <div className='col-span-3'>
                Kaleido
            </div>
        </div>
        <div>
            You: Join us fr!
        </div>
    </div>
    )
}

export default ChatCard;