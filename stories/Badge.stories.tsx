import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon } from 'lucide-react';
import { Badge } from '../src/badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <CheckIcon />
        Verified
      </>
    ),
    variant: 'success',
  },
};

export const Silver: Story = {
  args: {
    children: 'Silver',
    variant: 'silver',
  },
};

export const Gold: Story = {
  args: {
    children: 'Gold',
    variant: 'gold',
  },
};

export const Graphite: Story = {
  args: {
    children: 'Graphite',
    variant: 'graphite',
  },
};

export const Steel: Story = {
  args: {
    children: 'Steel',
    variant: 'steel',
  },
};

export const Metals: Story = {
  args: {
    children: 'Silver',
  },
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="silver">Silver</Badge>
      <Badge variant="gold">Gold</Badge>
      <Badge variant="graphite">Graphite</Badge>
      <Badge variant="steel">Steel</Badge>
    </div>
  ),
};
