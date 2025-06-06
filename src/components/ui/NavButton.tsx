import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const navButtonVariants = cva(
    'text-center p-3 bg-foreground/0 backdrop-blur-md hover:bg-zinc-900 sticky top-0 z-10',
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
}


export default function NavButton({ children, variant, className, ...props }: NavButtonProps) {
    return (
        <div className={cn(navButtonVariants({ variant, className}))} {...props}>
            {children}
            <span className='absolute left-0 bottom-[-4px] h-0.5 rounded-xl bg-blue-950 duration-500 group-hover:w-full'></span>
        </div>
    )
}