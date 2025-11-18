import type { Meta, StoryObj } from '@storybook/react';
import {
  ArrowUpIcon,
  CopyIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
} from 'lucide-react';
import { Button } from '../src/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '../src/input-group';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from '../src/menu';
import { Tooltip, TooltipPopup, TooltipTrigger } from '../src/tooltip';

const meta = {
  title: 'Example/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput aria-label="Search" placeholder="Search" type="search" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithEndIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput aria-label="Email" placeholder="Email" type="email" />
      <InputGroupAddon align="inline-end">
        <MailIcon />
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithStartText: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput
        aria-label="Choose a username"
        placeholder="Choose a username"
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@coss.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithIconButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput
        aria-label="Url"
        defaultValue="https://coss.com"
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger
            render={<Button aria-label="Copy" size="icon-xs" variant="ghost" />}
          >
            <CopyIcon />
          </TooltipTrigger>
          <TooltipPopup>
            <p>Copy to clipboard</p>
          </TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <InputGroup>
      <InputGroupTextarea placeholder="Ask, Search or Chat…" />
      <InputGroupAddon align="block-end">
        <Menu>
          <Tooltip>
            <TooltipTrigger
              render={
                <MenuTrigger
                  render={
                    <Button
                      aria-label="Add files"
                      className="rounded-full"
                      size="icon-sm"
                      variant="ghost"
                    />
                  }
                >
                  <PlusIcon />
                </MenuTrigger>
              }
            />
            <TooltipPopup>Add files and more</TooltipPopup>
          </Tooltip>
          <MenuPopup align="start">
            <MenuItem>Add photos &amp; files</MenuItem>
            <MenuItem>Create image</MenuItem>
            <MenuItem>Thinking</MenuItem>
            <MenuItem>Deep research</MenuItem>
          </MenuPopup>
        </Menu>
        <InputGroupText className="ml-auto">78% used</InputGroupText>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="Send"
                className="rounded-full"
                size="icon-sm"
                variant="default"
              >
                <ArrowUpIcon />
              </Button>
            }
          />
          <TooltipPopup>Send</TooltipPopup>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  ),
};
