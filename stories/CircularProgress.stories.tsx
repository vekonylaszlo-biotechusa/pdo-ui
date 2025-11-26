import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "../src/circular-progress";

const meta = {
  title: "Example/CircularProgress",
  component: CircularProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    size: "md",
  },
  argTypes: {
    value: {
      control: {
        min: 0,
        max: 100,
        type: "range",
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export const CustomSize: Story = {
  args: {
    size: 24,
    value: 50,
  },
  argTypes: {
    value: {
      control: {
        min: 0,
        max: 100,
        type: "range",
      },
    },
    size: {
      control: {
        min: 14,
        max: 64,
        type: "range",
      },
    },
  },
};
