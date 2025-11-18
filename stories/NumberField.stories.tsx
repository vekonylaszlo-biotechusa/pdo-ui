import type { Meta, StoryObj } from '@storybook/react';
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
} from '../src/number-field';

const meta = {
  title: 'Example/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NumberField defaultValue={0}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};

export const WithScrub: Story = {
  render: () => (
    <NumberField defaultValue={0}>
      <NumberFieldScrubArea label="Quantity" />
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};

export const Large: Story = {
  render: () => (
    <NumberField defaultValue={0} size="lg">
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};

export const Range: Story = {
  render: () => (
    <NumberField defaultValue={5} max={10} min={0}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  ),
};
