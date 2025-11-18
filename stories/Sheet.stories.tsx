import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/button';
import { Field, FieldLabel } from '../src/field';
import { Form } from '../src/form';
import { Input } from '../src/input';
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from '../src/sheet';

const meta = {
  title: 'Example/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Sheet
      </SheetTrigger>
      <SheetPopup>
        <Form className="flex-1">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input defaultValue="Margaret Welsh" type="text" />
            </Field>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input defaultValue="@maggie.welsh" type="text" />
            </Field>
          </div>
          <SheetFooter>
            <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  ),
};

export const WithInset: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Sheet
      </SheetTrigger>
      <SheetPopup inset>
        <Form className="flex-1">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input defaultValue="Margaret Welsh" type="text" />
            </Field>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input defaultValue="@maggie.welsh" type="text" />
            </Field>
          </div>
          <SheetFooter>
            <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
            <Button type="submit">Save</Button>
          </SheetFooter>
        </Form>
      </SheetPopup>
    </Sheet>
  ),
};
