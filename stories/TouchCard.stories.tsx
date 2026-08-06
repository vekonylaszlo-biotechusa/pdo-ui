import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import {
  TouchCard,
  TouchCardContent,
  TouchCardTitle,
  TouchCardDescription,
} from "../src/touch-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TouchCard",
  component: TouchCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TouchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <TouchCardContent>
        <TouchCardTitle>This is a title</TouchCardTitle>
        <TouchCardDescription>
          This is a long description blah blah blah
        </TouchCardDescription>
      </TouchCardContent>
    ),
  },
};

export const Info: Story = {
  args: {
    children: (
      <TouchCardContent>
        <TouchCardTitle>This is a title</TouchCardTitle>
        <TouchCardDescription>
          This is a long description blah blah blah
        </TouchCardDescription>
      </TouchCardContent>
    ),
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    children: (
      <TouchCardContent>
        <TouchCardTitle>This is a title</TouchCardTitle>
        <TouchCardDescription>
          This is a long description blah blah blah
        </TouchCardDescription>
      </TouchCardContent>
    ),
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    children: (
      <TouchCardContent>
        <TouchCardTitle>This is a title</TouchCardTitle>
        <TouchCardDescription>
          This is a long description blah blah blah
        </TouchCardDescription>
      </TouchCardContent>
    ),
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    children: (
      <TouchCardContent>
        <TouchCardTitle>This is a title</TouchCardTitle>
        <TouchCardDescription>
          This is a long description blah blah blah
        </TouchCardDescription>
      </TouchCardContent>
    ),
    variant: "success",
  },
};
