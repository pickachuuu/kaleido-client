import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import ProfileAvatar from './ProfileAvatar';

const ChatCardVariants = cva(
    'w-full min-h-16 p-3 transform transition-colors duration-200 hover:bg-[var(--highlight)]',
    {
        variants: {
            variant: { 
                default: 'bg-[var(--background)]',
                active: 'bg-[var(--accent-secondary)] border-r-2 border-[var(--accent)]',
            },
        },
        defaultVariants: {
            variant: 'active',
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

ChatCard.Content = function ChatCardHeader({ className }: ChatCardContentProps){
    return (
    <div className='flex'>
        <div className='sticky top-0'>
            <ProfileAvatar variant={'chat'} profileUrl='/images/Logo/kaleido.png'/>
        </div>
        <div className='flex flex-col'>
            <div className='mx-2'>
                <span className='mr-2 font-bold text-[var(--accent)]'>Kaleido</span>
                <span className='text-[var(--accent-secondary)]'>@kaleido</span>
            </div>

            <div className='mx-2'>
                <span className='text-[var(--accent-secondary)]'>Hawuuu</span>
            </div>
        </div>
    </div>
    )
}

export default ChatCard;