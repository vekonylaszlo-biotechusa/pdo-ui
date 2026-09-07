import type { Meta, StoryObj } from "@storybook/react";
import { Zap } from "lucide-react";
import { fn } from "storybook/test";
import { GlassButton } from "../src/glass-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/GlassButton",
  component: GlassButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof GlassButton>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Small: Story = {
  args: {
    size: "sm",
    children: "Small",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
    children: "Red",
  },
};

export const Cream: Story = {
  args: {
    variant: "cream",
    children: "Cream",
  },
};

export const Blue: Story = {
  args: {
    variant: "blue",
    children: "Blue",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
    children: "Green",
  },
};

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};


export const Icon: Story = {
  args: {
    variant: "cream",
    children: <Zap  />,
    size: 'icon-xl'
  },
};
