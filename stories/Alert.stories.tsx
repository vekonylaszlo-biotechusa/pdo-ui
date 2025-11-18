import type { Meta, StoryObj } from '@storybook/react';
import { AlertCircleIcon, CheckIcon, InfoIcon } from 'lucide-react';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '../src/alert';
import { Button } from '../src/button';

const meta = {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: (args) => (
    <Alert {...args}>
      <CheckIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertCircleIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
  ),
};

export const ErrorWithAction: Story = {
  args: {
    variant: 'error',
  },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>The action was unsuccessful!</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost">
          Dismiss
        </Button>
        <Button size="xs">Retry</Button>
      </AlertAction>
    </Alert>
  ),
};
