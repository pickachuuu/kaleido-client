import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navButtonVariants = cva(
    'flex-1 font-bold text-[var(--accent-secondary)] text-center p-3 border-b border-[var(--accent-secondary)] hover:bg-[var(--highlight)] sticky top-0 h-13 cursor-pointer',
    {
        variants:{
            variant:{
                default: '',
            }
        }
    }
)


export interface NavButtonProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navButtonVariants> {
        children: React.ReactNode;
        active?: Boolean; 
}


export default function NavButton({ children, active, variant, className, ...props }: NavButtonProps) {
    return (
        <div className={cn(navButtonVariants({ variant, className}), active && 'text-[var(--accent)]')} {...props}>
            {children}

            <div className='flex justify-center items-center'>
                <span className={cn('absolute bottom-[0.5px] h-1 rounded-xl bg-[var(--accent)] duration-500 text-center', active && 'w-16')}></span>
            </div>
        </div>
    )
}