import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; 
import React from 'react';

const StickyContainerVariants = cva(
    'sticky top-0 z-10 cursor-pointer',
    {
        variants: {
            variant: {
                solid: 'bg-background',
                transparent: ' backdrop-blur-xl bg-white/10 backdrop-blur-md border-b border-white/10'
            }   
        },
        defaultVariants: {
            variant: 'transparent'
        }
    }
)

interface StickyContainerProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof StickyContainerVariants> {
    children: React.ReactNode
}



export default function StickyContainer({ children, variant, className, ...props}: StickyContainerProps){
    return (
        <div className={cn(StickyContainerVariants({ variant, className }))} {...props}>
            {children}
        </div>
    )
}