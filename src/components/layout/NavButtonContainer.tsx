import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const navButtonContainerVariants = cva(
    'flex border-b border-white/10',
    {
        variants: {
            variant: {
                default: '',
                three: ''
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