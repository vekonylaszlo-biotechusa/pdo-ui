import type { Meta, StoryObj } from '@storybook/react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';
import { Button } from '../src/button';
import { Toggle, ToggleGroup } from '../src/toggle-group';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '../src/tooltip';

const meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover me
      </TooltipTrigger>
      <TooltipPopup>Helpful hint</TooltipPopup>
    </Tooltip>
  ),
};

export const Grouped: Story = {
  render: () => (
    <TooltipProvider>
      <ToggleGroup defaultValue={['bold']} multiple>
        <Tooltip>
          <TooltipTrigger
            render={<Toggle aria-label="Toggle bold" value="bold" />}
          >
            <BoldIcon />
          </TooltipTrigger>
          <TooltipPopup>Bold</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={<Toggle aria-label="Toggle italic" value="italic" />}
          >
            <ItalicIcon />
          </TooltipTrigger>
          <TooltipPopup>Italic</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={<Toggle aria-label="Toggle underline" value="underline" />}
          >
            <UnderlineIcon />
          </TooltipTrigger>
          <TooltipPopup>Underline</TooltipPopup>
        </Tooltip>
      </ToggleGroup>
    </TooltipProvider>
  ),
};
