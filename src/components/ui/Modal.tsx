import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ModalVariants = cva(
    ' rounded-lg p-3',
    {
      variants: {
        variant: {
            default: 'bg-background'
        },
        size: {
            default: 'min-w-xl min-h-96',
            lg: 'min-w-150 min-h-160'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'lg'
      } 
    }
)

interface ModalProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps <typeof ModalVariants>{
        children: React.ReactNode
        className?: string
    }

export default function({ children, variant, size, className, ...props }: ModalProps){
    return (
        <div className='fixed inset-0 flex z-50 justify-center items-center bg-slate-800/50'>
            <div className={cn(ModalVariants({ variant, size, className }))} {...props}>
                {children}
            </div>
        </div>
    )
}