import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/label';
import { Radio, RadioGroup } from '../src/radio-group';

const meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="next">
      <Label>
        <Radio value="next" /> Next.js
      </Label>
      <Label>
        <Radio value="vite" /> Vite
      </Label>
      <Label>
        <Radio value="astro" /> Astro
      </Label>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="r-1">
      <div className="flex items-start gap-2">
        <Radio id="r-1" value="r-1" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="r-1">Free</Label>
          <p className="text-muted-foreground text-xs">
            Basic features for personal use.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Radio id="r-2" value="r-2" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="r-2">Pro</Label>
          <p className="text-muted-foreground text-xs">
            Advanced tools for professionals.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const CardStyle: Story = {
  render: () => (
    <RadioGroup defaultValue="r-1">
      <Label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
        <Radio value="r-1" />
        <div className="flex flex-col gap-1">
          <p className="text-sm leading-4">Email</p>
          <p className="text-muted-foreground text-xs">
            Receive notifications via email.
          </p>
        </div>
      </Label>
      <Label className="flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-checked:border-primary/48 has-data-checked:bg-accent/50">
        <Radio value="r-2" />
        <div className="flex flex-col gap-1">
          <p className="text-sm leading-4">SMS</p>
          <p className="text-muted-foreground text-xs">
            Receive notifications via text message.
          </p>
        </div>
      </Label>
    </RadioGroup>
  ),
};
