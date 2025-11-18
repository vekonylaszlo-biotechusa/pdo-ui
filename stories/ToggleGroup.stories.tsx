import type { Meta, StoryObj } from '@storybook/react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { Toggle, ToggleGroup } from '../src/toggle-group';

const meta = {
  title: 'Example/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue={['bold']}>
      <Toggle aria-label="Toggle bold" value="bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" value="italic">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" value="underline">
        <UnderlineIcon />
      </Toggle>
    </ToggleGroup>
  ),
};
