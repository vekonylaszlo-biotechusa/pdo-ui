
import type { Meta, StoryObj } from '@storybook/react';

function Test() {
  return (
    <div>sad</div>
  )
}

const meta = {
  title: 'Example/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
