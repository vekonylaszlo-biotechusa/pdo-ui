import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/label';
import { Slider, SliderValue } from '../src/slider';

const meta = {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Slider defaultValue={50} />,
};

export const WithLabel: Story = {
  render: () => (
    <Slider defaultValue={50}>
      <div className="mb-2 flex items-center justify-between gap-1">
        <Label className="font-medium text-sm">Opacity</Label>
        <SliderValue />
      </div>
    </Slider>
  ),
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
};
