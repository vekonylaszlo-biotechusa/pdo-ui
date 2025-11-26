import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/button";
import { Input } from "../src/input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input field",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small input field",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input field",
    size: "lg",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Touch: Story = {
  args: {
    placeholder: "Touch input field",
    size: "touch",
  },
};
