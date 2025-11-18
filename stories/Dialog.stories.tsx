import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
} from '../src/alert-dialog';
import { Button } from '../src/button';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '../src/dialog';
import { Input } from '../src/input';
import { Label } from '../src/label';
import { Textarea } from '../src/textarea';
import { WithDialogComponent } from './Menu.stories';

const meta = {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Label>Name</Label>
          <Input defaultValue="Margaret Welsh" type="text" />
          <Label>Username</Label>
          <Input defaultValue="@maggie.welsh" type="text" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

export const FromMenu: Story = {
  render: () => <WithDialogComponent />,
};

export const Nested: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open parent
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Manage team member</DialogTitle>
          <DialogDescription>
            View and manage a user in your team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Name</p>
            <p className="font-medium text-sm">Bora Baloglu</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Email</p>
            <p className="font-medium text-sm">bora@example.com</p>
          </div>
        </div>
        <DialogFooter>
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Edit details
            </DialogTrigger>
            <DialogPopup showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Edit details</DialogTitle>
                <DialogDescription>
                  Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Label>Name</Label>
                <Input defaultValue="Bora Baloglu" type="text" />
                <Label>Email</Label>
                <Input defaultValue="bora@example.com" type="text" />
              </div>
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  Cancel
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogPopup>
          </Dialog>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  ),
};

function DialogCloseConfirmationDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [value, setValue] = useState('');
  return (
    <Dialog
      onOpenChange={(o) => {
        if (!o && value) {
          setConfirmOpen(true);
        } else {
          setDialogOpen(o);
        }
      }}
      open={dialogOpen}
    >
      <DialogTrigger render={<Button variant="outline" />}>
        Compose
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>New message</DialogTitle>
          <DialogDescription>Type something and try closing.</DialogDescription>
        </DialogHeader>

        <Textarea onChange={(e) => setValue(e.target.value)} value={value} />
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button
            onClick={() => {
              setValue('');
              setDialogOpen(false);
            }}
          >
            Send
          </Button>
        </DialogFooter>
      </DialogPopup>
      {/* Confirmation dialog */}
      <AlertDialog onOpenChange={setConfirmOpen} open={confirmOpen}>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard changes?</AlertDialogTitle>
            <AlertDialogDescription>
              Your message will be lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose render={<Button variant="ghost" />}>
              Go back
            </AlertDialogClose>
            <Button
              onClick={() => {
                setConfirmOpen(false);
                setValue('');
                setDialogOpen(false);
              }}
            >
              Discard
            </Button>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    </Dialog>
  );
}

export const Confirmation: Story = {
  render: () => <DialogCloseConfirmationDemo />,
};
