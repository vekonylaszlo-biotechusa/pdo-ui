import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";

import { cn } from "./lib/utils";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "group/switch inset-shadow-[0_1px_--theme(--color-black/8%)] inline-flex h-4.5 w-7.5 shrink-0 items-center rounded-sm p-px outline-none transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-64 data-checked:bg-accent data-unchecked:bg-input",
        className,
      )}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-5.5 rounded-sm bg-background ring-1 ring-ring/50 shadow-md transition-[translate,width] group-active/switch:w-6 data-checked:translate-x-3 data-unchecked:translate-x-[-4px] data-checked:group-active/switch:translate-x-2.5",
        )}
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
