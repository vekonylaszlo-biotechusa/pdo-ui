import * as React from "react";
import { useRender } from "@base-ui/react";
import { cn } from "./lib/utils";

interface Props extends useRender.ComponentProps<"button"> {
  variant?: "secondary" | "primary" | "warning";
}

export const TouchButton = React.forwardRef<HTMLButtonElement, Props>(
  function TouchButton(
    { variant = "primary", className, children, type, ...props },
    ref,
  ) {
    return (
      <button
        {...props}
        ref={ref}
        type={type ?? "button"}
        className={cn(
          "group inline-flex min-h-16.25 min-w-25 bg-linear-180 from-[#424242] to-[#262626] p-2.5 shadow-(--shadow-big-button-corner)",
          className,
        )}
      >
        <div className="relative min-h-11 w-full rounded-xs bg-linear-to-b from-[#161616] to-[#000000] px-3">
          <div
            className={cn(
              "absolute inset-x-[0.5%] font-semibold top-1/2 z-10 flex h-[96%] translate-y-[-60%] items-center justify-center rounded-xs bg-linear-to-b px-4 text-center transition-transform duration-100 group-active:translate-y-[-52%]",
              {
                "from-[#115175] to-[#0e415e] text-white": variant === "primary",
                "from-[#4c4c4c] to-[#353535] text-white":
                  variant === "secondary",
                "from-[#bb4128] to-[#96331f] text-white": variant === "warning",
              },
            )}
          >
            {children}
          </div>

          <div
            className={cn(
              "absolute inset-x-[0.5%] top-1/2 h-[96%] translate-y-[-51%] rounded-xs bg-linear-to-b",
              {
                "from-[#092d41] from-85% via-[#092d41] via-85% to-[#08283a]":
                  variant === "primary",
                "from-[#222222] from-85% via-[#222222] via-85% to-[#131313]":
                  variant === "secondary",
                "from-[#792919] from-85% via-[#792919] via-85% to-[#551d11]":
                  variant === "warning",
              },
            )}
          />

          <div
            className={cn(
              "absolute bottom-[8.5px] left-1 h-px w-[95%] rounded-md bg-linear-to-r from-transparent to-transparent transition-all duration-50 group-active:bottom-[6.5px]",
              {
                "via-[#616161]": variant === "secondary",
                "via-[#d5fffe]": variant === "primary",
                "via-[#ff9d89]": variant === "warning",
              },
            )}
          />

          <span className="invisible px-4">{children}</span>
        </div>
      </button>
    );
  },
);

TouchButton.displayName = "TouchButton";
