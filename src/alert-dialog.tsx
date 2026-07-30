import { AlertDialog as AlertDialogPrimitive } from '@base-ui/react/alert-dialog';

import { cn } from './lib/utils';

function AlertDialog(props: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger(props: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

function AlertDialogPortal(props: AlertDialogPrimitive.Portal.Props) {
  return <AlertDialogPrimitive.Portal {...props} />;
}

function AlertDialogBackdrop({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      className={cn(
        'fixed inset-0 z-50 bg-backdrop-accent backdrop-blur-(--panel-blur) transition-all duration-normal ease-out data-ending-style:opacity-0 data-starting-style:opacity-0',
        className,
      )}
      data-slot="alert-dialog-backdrop"
      {...props}
    />
  );
}

function AlertDialogPopup({
  className,
  ...props
}: AlertDialogPrimitive.Popup.Props) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <div className="fixed inset-0 z-50">
        <div className="flex h-dvh flex-col items-center overflow-hidden pt-6 max-sm:before:flex-1 sm:overflow-y-auto sm:p-4 sm:after:flex-1 sm:before:basis-[20vh]">
          <AlertDialogPrimitive.Popup
            className={cn(
              'sm:translate-y-[calc(-1.25rem*var(--nested-dialogs))] row-start-2 grid w-full min-w-0 origin-top gap-4 border bg-popover  p-6 text-popover-foreground shadow-lg transition-[scale,opacity,translate] duration-normal ease-in-out will-change-transform data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:overflow-y-auto max-sm:border-none max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4 sm:max-w-lg sm:scale-[calc(1-0.1*var(--nested-dialogs))] sm:rounded-md sm:data-ending-style:scale-98 sm:data-starting-style:scale-98',
              'relative before:pointer-events-none before:absolute before:inset-0 before:shadow-depth max-sm:before:hidden sm:data-nested:data-ending-style:translate-y-8 sm:data-nested:data-starting-style:translate-y-8 sm:before:rounded-[calc(var(--radius-md)-1px)]',
              className,
            )}
            data-slot="alert-dialog-popup"
            {...props}
          />
        </div>
      </div>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      data-slot="alert-dialog-header"
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      data-slot="alert-dialog-footer"
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: AlertDialogPrimitive.Title.Props) {
  return (
    <AlertDialogPrimitive.Title
      className={cn('font-semibold text-lg', className)}
      data-slot="alert-dialog-title"
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: AlertDialogPrimitive.Description.Props) {
  return (
    <AlertDialogPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="alert-dialog-description"
      {...props}
    />
  );
}

function AlertDialogClose(props: AlertDialogPrimitive.Close.Props) {
  return (
    <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
  );
}

export {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBackdrop as AlertDialogOverlay,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogPopup as AlertDialogContent,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
