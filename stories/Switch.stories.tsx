import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/label';
import { Switch } from '../src/switch';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Label>
      <Switch />
      Marketing emails
    </Label>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Switch defaultChecked id="sw" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="sw">Marketing emails</Label>
        <p className="text-muted-foreground text-xs">
          By enabling marketing emails, you agree to receive emails.
        </p>
      </div>
    </div>
  ),
};

export const CardStyle: Story = {
  render: () => (
    <Label
      className="flex items-center gap-6 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50"
      htmlFor="sw2"
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-4">Enable notifications</p>
        <p className="text-muted-foreground text-xs">
          You can enable or disable notifications at any time.
        </p>
      </div>
      <Switch defaultChecked id="sw2" />
    </Label>
  ),
};
