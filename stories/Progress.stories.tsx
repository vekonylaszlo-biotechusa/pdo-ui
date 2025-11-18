import type { Meta, StoryObj } from '@storybook/react';
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from '../src/progress';

const meta = {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
  },
};

export const WithLabel: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <Progress {...args}>
      <div className="flex items-center justify-between gap-2">
        <ProgressLabel>Export data</ProgressLabel>
        <ProgressValue />
      </div>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </Progress>
  ),
};
