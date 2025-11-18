import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldDescription, FieldLabel } from '../src/field';
import { Fieldset, FieldsetLegend } from '../src/fieldset';
import { Input } from '../src/input';

const meta = {
  title: 'Example/FieldSet',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <Fieldset>
      <FieldsetLegend>Billing Details</FieldsetLegend>
      <Field>
        <FieldLabel>Company</FieldLabel>
        <Input placeholder="Enter company name" type="text" />
        <FieldDescription>
          The name that will appear on invoices.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Tax ID</FieldLabel>
        <Input placeholder="Enter tax identification number" type="text" />
        <FieldDescription>
          Your business tax identification number.
        </FieldDescription>
      </Field>
    </Fieldset>
  ),
};
