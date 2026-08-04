import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from './lib/utils';

const buttonVariants = cva(
  " text-[14px] relative rounded-md inline-flex active:scale-[0.975] will-change-transform shrink-0 cursor-pointer items-center justify-center  whitespace-nowrap rounded-md font-medium text-sm outline-none pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-all duration-fast ease-out",
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'py-2 px-4',
        icon: 'size-8',
        sm: 'min-h-7 gap-1.5 rounded-sm px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]',
        touch: 'py-4 px-6',
      },
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/80 shadow-primary',
        destructive:
          'bg-destructive text-destructive-foreground shadow-destructive hover:bg-destructive/90',
        warning:
          'bg-warning text-warning-foreground shadow-warning hover:bg-warning/90',
        success:
          'bg-success text-success-foreground shadow-success hover:bg-success/90',
        'destructive-outline':
          'border border-destructive bg-transparent hover:bg-destructive hover:text-destructive-foreground text-destructive ',
        ghost:
          'border-transparent hover:bg-primary hover:text-primary-foreground',
        link: 'border-transparent underline-offset-4 hover:underline',
        outline:
          'border-border bg-background shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-depth bg-surface-tint dark:not-in-data-[slot=group]: dark:not-disabled:not-active:not-data-pressed:before:shadow-depth [&:is(:disabled,:active,[data-pressed])]:shadow-none [&:is(:hover,[data-pressed])]:bg-highlight/50 dark:[&:is(:hover,[data-pressed])]:bg-surface-tint-active',
        secondary:
          'bg-secondary text-secondary-foreground shadow-secondary hover:bg-secondary/90',
        test: 'text-primary-foreground bg-gradient-to-b from-primary-from to-primary-to hover:from-[#228e22] hover:to-[#00761e] active:shadow-primary-active shadow-primary  border-none transition-all duration-fast',
      },
    },
  },
);

interface ButtonProps extends useRender.ComponentProps<'button'> {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>['type'] =
    render ? undefined : 'button';

  const defaultProps = {
    className: cn(buttonVariants({ className, size, variant })),
    'data-slot': 'button',
    type: typeValue,
  };

  return useRender({
    defaultTagName: 'button',
    props: mergeProps<'button'>(defaultProps, props),
    render,
  });
}

export { Button, buttonVariants };
