import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../src/button';
import { Field, FieldError, FieldLabel } from '../src/field';
import { Form } from '../src/form';
import { Input } from '../src/input';

const meta = {
  title: 'Example/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

function FormDemo() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    alert(`Email: ${formData.get('email') || ''}`);
  };
  return (
    <Form className="max-w-64" onSubmit={onSubmit}>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input
          disabled={loading}
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
        <FieldError>Please enter a valid email.</FieldError>
      </Field>
      <Button disabled={loading} type="submit">
        Submit
      </Button>
    </Form>
  );
}

export const Example: Story = {
  render: () => <FormDemo />,
};
