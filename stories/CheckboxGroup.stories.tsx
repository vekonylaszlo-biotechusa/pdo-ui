import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/checkbox';
import { CheckboxGroup } from '../src/checkbox-group';
import { Label } from '../src/label';

const meta = {
  title: 'Example/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup aria-label="Select frameworks" defaultValue={['next']}>
      <Label>
        <Checkbox value="next" />
        Next.js
      </Label>
      <Label>
        <Checkbox disabled value="vite" />
        Vite
      </Label>
      <Label>
        <Checkbox value="astro" />
        Astro
      </Label>
    </CheckboxGroup>
  ),
};
