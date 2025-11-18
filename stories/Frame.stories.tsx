import type { Meta, StoryObj } from '@storybook/react';
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from '../src/frame';

const meta = {
  title: 'Example/Frame',
  component: Frame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle>Section header</FrameTitle>
        <FrameDescription>Brief description about the section</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="font-semibold text-sm">Section title</h2>
        <p className="text-muted-foreground text-sm">Section description</p>
      </FramePanel>
    </Frame>
  ),
};
