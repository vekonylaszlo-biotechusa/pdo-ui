import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "./lib/utils";

const glassButtonVariants = cva(
  "gbtn-before text-[16px] shadow-gb-shadow relative rounded-full inline-flex hover:-translate-y-px active:translate-y-[-0.5px] will-change-transform shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-semibold text-sm outline-none pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-disabled [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 transition-all duration-200 ease-out [background:var(--gb-bg)] [color:var(--gb-fg)]",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "py-2 px-4",
        icon: "size-8",
        "icon-lg": "size-12",
        "icon-xl": "size-16",
        sm: "min-h-7 gap-1.5 px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
      },
      variant: {
        default:
          "[--gb-bg:var(--gb-primary)] [--gb-fg:var(--gb-primary-foreground)] [--gb-before-bg:var(--gb-primary-before-bg)] [--gb-inner-stroke-bg:var(--gb-primary-inner-stroke)]",
        cream:
          "[--gb-bg:var(--gb-cream)] [--gb-fg:var(--gb-cream-foreground)] [--gb-before-bg:var(--gb-cream-before-bg)] [--gb-inner-stroke-bg:var(--gb-cream-inner-stroke)]",
        secondary:
          "[--gb-bg:var(--gb-secondary)] [--gb-fg:var(--gb-secondary-foreground)] [--gb-before-bg:var(--gb-secondary-before-bg)] [--gb-inner-stroke-bg:var(--gb-secondary-inner-stroke)]",
        blue: "[--gb-bg:var(--gb-blue)] [--gb-fg:var(--gb-blue-foreground)] [--gb-before-bg:var(--gb-blue-before-bg)] [--gb-inner-stroke-bg:var(--gb-blue-inner-stroke)]",

        green:
          "[--gb-bg:var(--gb-green)] [--gb-fg:var(--gb-green-foreground)] [--gb-before-bg:var(--gb-green-before-bg)] [--gb-inner-stroke-bg:var(--gb-green-inner-stroke)]",
        red: "[--gb-bg:var(--gb-red)] [--gb-fg:var(--gb-red-foreground)] [--gb-before-bg:var(--gb-red-before-bg)] [--gb-inner-stroke-bg:var(--gb-red-inner-stroke)]",
      },
    },
  },
);

interface GlassButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof glassButtonVariants>["variant"];
  size?: VariantProps<typeof glassButtonVariants>["size"];
}

function GlassButton({
  className,
  variant,
  size,
  children,
  render,
  ...props
}: GlassButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    className: cn(glassButtonVariants({ className, size, variant })),
    "data-slot": "button",
    type: typeValue,
    children: (
      <>
        <span className="gbtn-inner-stroke" aria-hidden="true" />
        {children}
      </>
    ),
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
}

export { GlassButton, glassButtonVariants };
