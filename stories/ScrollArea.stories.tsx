import { ScrollArea } from "../src/scroll-area";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-alpha.${i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-64 rounded-lg border">
      <div className="px-4 py-2">
        <h4 className="mb-2 font-medium text-sm">Tags</h4>
        <div className="flex flex-col gap-1">
          {tags.map((tag) => (
            <div className="text-sm" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

export const ScrollFade: Story = {
  render: () => (
    <ScrollArea className="h-64 rounded-lg border" scrollFade>
      <div className="px-4 py-2">
        <h4 className="mb-2 font-medium text-sm">Tags</h4>
        <div className="flex flex-col gap-1">
          {tags.map((tag) => (
            <div className="text-sm" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};
