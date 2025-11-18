import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldDescription, FieldLabel } from '../src/field';
import { Input } from '../src/input';

const meta = {
  title: 'Example/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldExample: Story = {
  render: () => (
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Enter your name" type="text" />
      <FieldDescription>Visible on your profile</FieldDescription>
    </Field>
  ),
};
