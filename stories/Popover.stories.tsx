import type { Meta, StoryObj } from '@storybook/react';
import { InfoIcon, XIcon } from 'lucide-react';
import { Button } from '../src/button';
import { Field } from '../src/field';
import { Form } from '../src/form';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../src/input-group';
import {
  Popover,
  PopoverClose,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '../src/popover';
import { Textarea } from '../src/textarea';

const meta = {
  title: 'Example/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverPopup className="w-80">
        <div className="mb-4">
          <PopoverTitle className="text-base">Send us feedback</PopoverTitle>
          <PopoverDescription>
            Let us know how we can improve.
          </PopoverDescription>
        </div>
        <Form>
          <Field>
            <Textarea
              aria-label="Send feedback"
              id="feedback"
              placeholder="How can we improve?"
            />
          </Field>
          <Button type="submit">Send feedback</Button>
        </Form>
      </PopoverPopup>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverPopup className="w-80">
        <PopoverClose className="pointer-coarse:after:-inset-1 absolute end-2 top-2 inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-72 outline-none transition-[color,background-color,box-shadow,opacity] pointer-coarse:after:absolute hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0">
          <XIcon />
          <span className="sr-only">Close</span>
        </PopoverClose>
        <div className="mb-2">
          <PopoverTitle className="text-base">Notifications</PopoverTitle>
          <PopoverDescription>
            You are all caught up. Good job!
          </PopoverDescription>
        </div>
        <PopoverClose render={<Button variant="outline" />}>Close</PopoverClose>
      </PopoverPopup>
    </Popover>
  ),
};

export const TooltipStyle: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput
        aria-label="Password"
        placeholder="Password"
        type="password"
      />
      <InputGroupAddon align="inline-end">
        <Popover>
          <PopoverTrigger
            render={
              <Button
                aria-label="Password requirements"
                size="icon-xs"
                variant="ghost"
              />
            }
          >
            <InfoIcon />
          </PopoverTrigger>
          <PopoverPopup side="top" tooltipStyle>
            <p>Min. 8 characters</p>
          </PopoverPopup>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  ),
};
