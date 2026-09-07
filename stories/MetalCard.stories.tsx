import type { Meta, StoryObj } from "@storybook/react";
import { Send, Zap } from "lucide-react";
import { MetalCard } from "../src/metal-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/MetalCard",
  component: MetalCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof MetalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Silver: Story = {
  args: {
    title: "Instant access",
    icon: Send,
    tag: "SELF-SERVE",
    description: "You can explore and learn how to use Fey independently ",
  },
};

export const Bronze: Story = {
  args: {
    title: "test",
    icon: Zap,
    tag: "GUIDED",
    variant: "bronze",
  },
};
