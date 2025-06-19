import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import ProfileAvatar from './ProfileAvatar';

const ChatCardVariants = cva(
    'w-full min-h-16 p-3 hover:bg-zinc-900',
    {
        variants: {
            variant: { 
                default: 'bg-background',
                active: 'bg-zinc-950'
            },
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

interface ChatCardProps extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ChatCardVariants>{
        children: React.ReactNode
        className?: string
}

interface ChatCardContentProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string
}

function ChatCard({ children, className, variant, ...props }: ChatCardProps){
    return (
        <div className={cn(ChatCardVariants({ className, variant }))} {...props}>
            {children}
        </div>
    )
}

ChatCard.Content = function ChatCardHeader({ className, ...props}: ChatCardContentProps){
    return (
    <div className='flex'>
        <div className='sticky top-0'>
            <ProfileAvatar variant={'chat'} profileUrl='/images/Logo/kaleido.png'/>
        </div>
        <div className='flex flex-col'>
            <div className='mx-2'>
                <span className='mr-2 font-bold'>Kaleido</span>
                <span className='text-zinc-500'>@kaleido</span>
            </div>

            <div className='mx-2'>
                <span className='text-zinc-500'>Hawuuu</span>
            </div>
        </div>
    </div>
    )
}

export default ChatCard;