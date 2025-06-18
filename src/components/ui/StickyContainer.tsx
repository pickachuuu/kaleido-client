import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; 
import React from 'react';

const StickyContainerVariants = cva(
    'sticky top-0 z-10 cursor-pointer',
    {
        variants: {
            variant: {
                solid: 'bg-background',
                transparent: 'bg-foreground/0 backdrop-blur-xl'
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