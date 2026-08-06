import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "./lib/utils";

const touchCardVariants = cva(
  "h-fit w-fit rounded-sm px-4 py-3 relative bg-linear-180  p-2.5 shadow-(--shadow-toggle-corner)",
  {
    variants: {
      variant: {
        default: "",
        info: "before:absolute before:inset-0 before:content-[''] before:bg-radial-[at_100%_0%] before:from-info/12 before:via-info/10 before:to-transparent before:to-60% before:pointer-events-none",
        success:
          "before:absolute before:inset-0 before:content-[''] before:bg-radial-[at_100%_0%] before:from-success/12 before:via-success/10 before:to-transparent before:to-60% before:pointer-events-none",
        warning:
          "before:absolute before:inset-0 before:content-[''] before:bg-radial-[at_100%_0%] before:from-warning/15 before:via-warning/10 before:to-transparent before:to-60% before:pointer-events-none",
        error:
          "before:absolute before:inset-0 before:content-[''] before:bg-radial-[at_100%_0%] before:from-destructive/15 before:via-destructive/10 before:to-transparent before:to-60% before:pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface TouchCardProps
  extends React.ComponentProps<"div">, VariantProps<typeof touchCardVariants> {}

export const TouchCard = React.forwardRef<HTMLDivElement, TouchCardProps>(
  function TouchCard({ variant, className, children, ...props }, ref) {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(touchCardVariants({ variant }), className)}
      >
        {children}
      </div>
    );
  },
);

TouchCard.displayName = "TouchCard";

export const TouchCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>(function TouchCardTitle({ className, children, ...props }, ref) {
  return (
    <h3
      {...props}
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
    >
      {children}
    </h3>
  );
});

TouchCardTitle.displayName = "TouchCardTitle";

export const TouchCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(function TouchCardDescription({ className, children, ...props }, ref) {
  return (
    <p {...props} ref={ref} className={cn("text-sm opacity-80", className)}>
      {children}
    </p>
  );
});

TouchCardDescription.displayName = "TouchCardDescription";

export const TouchCardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(function TouchCardContent({ className, children, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={cn("mt-2 flex flex-col gap-2", className)}
    >
      {children}
    </div>
  );
});

TouchCardContent.displayName = "TouchCardContent";
