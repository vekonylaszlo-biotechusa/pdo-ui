import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "./lib/utils";

const buttonVariants = cva(
  "relative inline-flex active:scale-[0.97]  will-change-transform shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-clip-padding font-medium text-sm outline-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-all duration-100 ease-out",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default:
          "min-h-8 px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)]",
        icon: "size-8",
        "icon-lg": "size-9",
        "icon-sm": "size-7",
        "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-4.5",
        "icon-xs":
          "size-6 rounded-md before:rounded-[calc(var(--radius-md)-1px)]",
        lg: "min-h-9 px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2)-1px)]",
        sm: "min-h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
        xl: "min-h-10 px-[calc(--spacing(4)-1px)] py-[calc(--spacing(2)-1px)] text-base [&_svg:not([class*='size-'])]:size-4.5",
        xs: "min-h-6 gap-1 rounded-md px-[calc(--spacing(2)-1px)] py-[calc(--spacing(1)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] [&_svg:not([class*='size-'])]:size-3",
        touch: "py-4 px-6 min-w-[120px]",
      },
      variant: {
        default:
          "text-primary-foreground bg-gradient-to-b from-primary-from from-[0%] via-primary-via via-[45%] to-primary-to to-[100%] hover:bg-primary active:shadow-primary-active shadow-primary border-none active:scale-[0.97]",
        destructive:
          "not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-destructive bg-destructive text-white shadow-destructive/24 shadow-xs hover:bg-destructive/90 [&:is(:active,[data-pressed])]:inset-shadow-[0_1px_--theme(--color-black/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none",
        "destructive-outline":
          "border-border bg-transparent text-destructive-foreground shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/4%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none [&:is(:hover,[data-pressed])]:border-destructive/32 [&:is(:hover,[data-pressed])]:bg-destructive/4",
        ghost:
          "border-transparent hover:bg-highlight hover:text-highlight-foreground data-pressed:bg-highlight",
        link: "border-transparent underline-offset-4 hover:underline",
        outline:
          "border-border bg-background shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/4%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none [&:is(:hover,[data-pressed])]:bg-highlight/50 dark:[&:is(:hover,[data-pressed])]:bg-input/64",
        secondary:
          "border-secondary-border bg-secondary text-secondary-foreground shadow-secondary active:shadow-secondary-active hover:bg-secondary/90 data-pressed:bg-secondary/90",
        test: "text-primary-foreground bg-gradient-to-b from-primary-from to-primary-to hover:from-[#228e22] hover:to-[#00761e] active:shadow-primary-active shadow-primary  border-none transition-all duration-100",
      },
    },
  },
);

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    className: cn(buttonVariants({ className, size, variant })),
    "data-slot": "button",
    type: typeValue,
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}

export { Button, buttonVariants };
