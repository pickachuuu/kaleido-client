import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navButtonVariants = cva(
    'flex-1 font-bold text-zinc-500 text-center p-3 border-b-1 border-zinc-700 hover:bg-zinc-900 sticky top-0 z-10 h-13',
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
        <div className={cn(navButtonVariants({ variant, className}), active && 'text-foreground')} {...props}>
            {children}

            <div className='flex justify-center items-center'>
                <span className={cn('absolute  bottom-[0.5px] h-1 rounded-xl bg-blue-600 duration-500 text-center', active && 'w-16')}></span>
            </div>
        </div>
    )
}