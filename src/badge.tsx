import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './lib/utils';

const badgeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-xs border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled [&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [button,a&]:cursor-pointer [button,a&]:pointer-coarse:after:absolute [button,a&]:pointer-coarse:after:size-full [button,a&]:pointer-coarse:after:min-h-11 [button,a&]:pointer-coarse:after:min-w-11",
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'px-1.5 py-0.5 text-xs',
        lg: 'px-2 text-sm',
        sm: 'rounded-[calc(var(--radius-sm)-3px)] px-1 text-[.625rem]',
      },
      variant: {
        default:
          'bg-primary text-primary-foreground [button,a&]:hover:bg-primary/90',
        destructive:
          'bg-destructive text-white [button,a&]:hover:bg-destructive/90',
        error: 'bg-destructive text-destructive-foreground',
        info: 'bg-info text-info-foreground',
        outline:
          'border-border bg-transparent bg-surface-tint [button,a&]:hover:bg-highlight/50 [button,a&]:hover:bg-surface-tint-hover',
        secondary:
          'bg-secondary text-secondary-foreground [button,a&]:hover:bg-secondary/90',
        success: 'bg-success text-success-foreground',
        warning: 'bg-warning text-warning-foreground',
      },
    },
  },
);

interface BadgeProps extends useRender.ComponentProps<'span'> {
  variant?: VariantProps<typeof badgeVariants>['variant'];
  size?: VariantProps<typeof badgeVariants>['size'];
}

function Badge({ className, variant, size, render, ...props }: BadgeProps) {
  const defaultProps = {
    className: cn(badgeVariants({ className, size, variant })),
    'data-slot': 'badge',
  };

  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(defaultProps, props),
    render,
  });
}

export { Badge, badgeVariants };
