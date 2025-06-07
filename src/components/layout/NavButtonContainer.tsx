import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const navButtonContainerVariants = cva(
    'grid border-b-1 border-zinc-700',
    {
        variants: {
            variant: {
                default: 'grid-cols-2',
                three: 'grid-cols-3'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
);

export interface navButtonContainerVariantsProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navButtonContainerVariants> {
    children: React.ReactNode;
}

export default function NavButtonContainer({
    children,
    variant,
    className,
    ...props
}: navButtonContainerVariantsProps ) {
    return (
        <div className={cn(navButtonContainerVariants({ variant, className }))} {...props}>
            {children}
        </div>
    )
}