import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/checkbox';
import { Label } from '../src/label';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Label>
      <Checkbox />
      Accept terms and conditions
    </Label>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Checkbox defaultChecked id="title" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="title">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-xs">
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  ),
};

export const CardStyle: Story = {
  render: () => (
    <Label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
      <Checkbox defaultChecked />
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-4">Enable notifications</p>
        <p className="text-muted-foreground text-xs">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Label>
  ),
};
