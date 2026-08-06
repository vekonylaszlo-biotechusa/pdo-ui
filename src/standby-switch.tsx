import * as React from "react";
import { useRender } from "@base-ui/react";
import { CircleIcon, Slash } from "lucide-react";

interface Props extends useRender.ComponentProps<"button"> {
  active?: boolean;
  defaultActive?: boolean;
  onActiveChange?: (active: boolean) => void;
}

export const StandbySwitch = React.forwardRef<HTMLButtonElement, Props>(
  function StandbySwitch(
    {
      active,
      defaultActive = true,
      onActiveChange,
      onClick,
      disabled,
      ...props
    },
    ref,
  ) {
    const isControlled = active !== undefined;

    const [internalActive, setInternalActive] = React.useState(defaultActive);

    const value = isControlled ? active : internalActive;

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      if (disabled) {
        return;
      }

      const next = !value;

      if (!isControlled) {
        setInternalActive(next);
      }

      onActiveChange?.(next);
      onClick?.(event);
    }

    return (
      <button
        {...props}
        ref={ref}
        type="button"
        disabled={disabled}
        role="switch"
        aria-checked={value}
        data-state={value ? "on" : "off"}
        onClick={handleClick}
        className="flex h-fit w-fit flex-col rounded-[1.5px] bg-linear-180 from-[#424242] to-[#262626] p-2.5 shadow-(--shadow-toggle-corner) transition-all duration-100"
      >
        <div
          data-on={value}
          className="flex h-20 w-10 flex-col bg-linear-(--toggle-gradient-off) shadow-(--shadow-toggle-switch-off) data-[on=true]:bg-linear-(--toggle-gradient) data-[on=true]:shadow-(--shadow-toggle-switch)"
        >
          <div
            data-on={value}
            className="flex h-full w-full items-center justify-center data-[on=true]:text-white/80"
          >
            <Slash
              aria-hidden
              size={12}
              strokeWidth={4}
              className="-rotate-45"
            />
          </div>

          <div
            data-on={value}
            className="flex h-full w-full items-center justify-center data-[on=false]:text-white/80"
          >
            <CircleIcon aria-hidden size={12} strokeWidth={4} />
          </div>
        </div>
      </button>
    );
  },
);

StandbySwitch.displayName = "StandbySwitch";
