import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/button";
import { GlassButton } from "../src/glass-button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "../src/card";
import { Input } from "../src/input";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardPanel>
        <div className="flex flex-col gap-4">
          <Input placeholder="Name of your project" type="text" />
        </div>
      </CardPanel>
      <CardFooter>
        <GlassButton className="w-full" type="submit">
          Deploy
        </GlassButton>
      </CardFooter>
    </Card>
  ),
};

export const Inset: Story = {
  render: () => (
    <Card variant="inset" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardPanel>
        <div className="flex flex-col gap-4">
          <Input placeholder="Name of your project" type="text" />
        </div>
      </CardPanel>
      <CardFooter>
        <GlassButton className="w-full" type="submit">
          Deploy
        </GlassButton>
      </CardFooter>
    </Card>
  ),
};
