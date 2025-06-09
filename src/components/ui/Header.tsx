import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const HeaderVariants = cva(
    'h-13',
    {
        variants: {
            variant: {
                default: 'p-0',
                bottomBorder: 'p-3 border-b-1 border-zinc-700'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HeaderVariants> {
    children: React.ReactNode;
    className?: string;
}

export default function Header({ children, variant, className, ...props }: HeaderProps ){
    return (
        <div className={cn(HeaderVariants({ variant, className }))} {...props}>
            <h1 className="text-xl font-bold">
                {children}
            </h1>
        </div>
    )
}