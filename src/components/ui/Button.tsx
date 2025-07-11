import React from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--highlight)]',
        secondary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-secondary)]',
        auth: 'border border-[var(--accent-secondary)] text-[var(--accent)] hover:bg-[var(--accent-secondary)] hover:text-white',
        outline: 'border border-[var(--accent-secondary)] text-[var(--foreground)] hover:bg-[var(--accent-secondary)] hover:text-white',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  startIcon?: string; // URL for the start icon
  endIcon?: string;   // URL for the end icon
  iconSize?: number;  // Optional icon size in pixels
}

const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant, 
  size, 
  startIcon,
  endIcon,
  iconSize = 24,
  children,
  ...props 
}) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))} 
      {...props}
    >
      {startIcon && (
        <Image 
          src={startIcon} 
          alt="start icon"
          width={iconSize}
          height={iconSize}
          className='mr-2' // margin right for spacing
        />
      )}
      {children}
      {endIcon && (
        <Image 
          src={endIcon} 
          alt="end icon"
          width={iconSize}
          height={iconSize}
        />
      )}
    </button>
  );
};

export { Button, buttonVariants };
