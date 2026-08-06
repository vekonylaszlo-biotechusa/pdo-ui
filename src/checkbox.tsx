import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';

import { cn } from './lib/utils';

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'relative inline-flex size-4.5 shrink-0 items-center justify-center rounded-xs border border-input-border  bg-background  outline-none ring-ring transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-sm)-1px)] not-disabled:not-data-checked:not-aria-invalid:before:shadow-depth focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-disabled aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/48 dark:aria-invalid:ring-destructive/24 dark:not-disabled:not-data-checked:not-aria-invalid:before:shadow-depth [&:is(:disabled,[data-checked],[aria-invalid])]:shadow-none',
        className,
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="-inset-px absolute flex items-center justify-center rounded-xs text-highlight data-unchecked:hidden data-checked:text-background data-checked:bg-[oklch(from_var(--accent)_l_0.07_h)] transition-all duration-100 data-indeterminate:text-foreground"
        data-slot="checkbox-indicator"
        render={(props, state) => (
          <span {...props}>
            {state.indeterminate ? (
              <svg
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 12h13.496" />
              </svg>
            ) : (
              <svg
                className="size-3"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.252 13.7 10.2 18.63 18.748 6.37" />
              </svg>
            )}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
