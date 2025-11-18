import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../src/toggle';

const meta = {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};
