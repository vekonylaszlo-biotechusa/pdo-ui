import type { Meta, StoryObj } from '@storybook/react';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  DollarSignIcon,
  PercentIcon,
} from 'lucide-react';
import { Button } from '../src/button';
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from '../src/select';
import { Toggle, ToggleGroup } from '../src/toggle-group';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from '../src/toolbar';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '../src/tooltip';

const meta = {
  title: 'Example/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
  { label: 'Times New Roman', value: 'times-new-roman' },
];

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Toolbar>
        <ToggleGroup className="border-none p-0" defaultValue={['left']}>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="Align left"
                  render={<Toggle value="left" />}
                >
                  <AlignLeftIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align left</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="Align center"
                  render={<Toggle aria-label="Toggle center" value="center" />}
                >
                  <AlignCenterIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align center</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="Align right"
                  render={<Toggle aria-label="Toggle right" value="right" />}
                >
                  <AlignRightIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align right</TooltipPopup>
          </Tooltip>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="Format as currency"
                  render={<Button size="icon" variant="ghost" />}
                >
                  <DollarSignIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Format as currency</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label="Format as percent"
                  render={<Button size="icon" variant="ghost" />}
                >
                  <PercentIcon />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Format as percent</TooltipPopup>
          </Tooltip>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Select defaultValue="helvetica" items={items}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    nativeButton={false}
                    render={
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    }
                  />
                }
              />
              <TooltipPopup sideOffset={8}>
                Select a different font
              </TooltipPopup>
            </Tooltip>
            <SelectPopup>
              {items.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton render={<Button />}>Save</ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    </TooltipProvider>
  ),
};
