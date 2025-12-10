import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "../src/accordion";

const meta = {
  title: "Example/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="w-[480px]">
      <Accordion className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Base UI?</AccordionTrigger>
          <AccordionPanel>
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionPanel>
            Head to the "Quick start" guide in the docs. If you've used unstyled
            libraries before, you'll feel at home.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
          <AccordionPanel>
            Of course! Base UI is free and open source.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
