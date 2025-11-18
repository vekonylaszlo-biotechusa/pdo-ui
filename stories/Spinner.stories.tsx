import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../src/input-group';
import { Spinner } from '../src/spinner';

const meta = {
  title: 'Example/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  ),
};

export const InInputGroup: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput disabled placeholder="Processing…" type="search" />
      <InputGroupAddon>
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  ),
};
