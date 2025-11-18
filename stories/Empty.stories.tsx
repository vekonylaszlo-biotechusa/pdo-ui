import type { Meta, StoryObj } from '@storybook/react';
import { BookIcon, RouteIcon } from 'lucide-react';
import { Button } from '../src/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../src/empty';

const meta = {
  title: 'Example/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <RouteIcon />
        </EmptyMedia>
        <EmptyTitle>No upcoming meetings</EmptyTitle>
        <EmptyDescription>Create a meeting to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button size="sm">Create meeting</Button>
          <Button size="sm" variant="outline">
            <BookIcon className="opacity-72" />
            View docs
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  ),
};
