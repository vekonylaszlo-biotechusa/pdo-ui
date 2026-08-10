import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "../src/drawer";
import { Button } from "../src/button";
import { useState } from "react";

const meta = {
  title: "Example/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Drawer position="right">
        <DrawerTrigger render={<Button variant="secondary" />}>
          Right
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>Right</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">
              Content from the right.
            </p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer position="left">
        <DrawerTrigger render={<Button variant="secondary" />}>
          Left
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>Left</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">
              Content from the left.
            </p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer position="top">
        <DrawerTrigger render={<Button variant="secondary" />}>
          Top
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>Top</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">
              Content from the top.
            </p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
      <Drawer>
        <DrawerTrigger render={<Button variant="secondary" />}>
          Bottom
        </DrawerTrigger>
        <DrawerPopup variant="inset">
          <DrawerHeader>
            <DrawerTitle>Bottom</DrawerTitle>
          </DrawerHeader>
          <DrawerPanel>
            <p className="text-muted-foreground text-sm">
              Content from the bottom.
            </p>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
    </div>
  ),
};

export const SnapPoints: Story = {
  render: () => {
    const snapPoints = ["300px", "600px", 1] as const;
    const [snapPoint, setSnapPoint] = useState<
      (typeof snapPoints)[number] | null
    >(snapPoints[0]);
    return (
      <Drawer
        onSnapPointChange={(point) =>
          setSnapPoint(point as (typeof snapPoints)[number] | null)
        }
        position="bottom"
        snapPoint={snapPoint}
        snapPoints={[...snapPoints]}
        snapToSequentialPoints
      >
        <DrawerTrigger render={<Button variant="secondary" />}>
          With snap points
        </DrawerTrigger>
        <DrawerPopup showBar>
          <DrawerHeader>
            <DrawerTitle>Snap Points</DrawerTitle>
            <DrawerDescription>
              Drag the drawer to snap between a compact peek and full-height
              view.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerPanel>
            <div className="flex flex-col gap-2">
              {Array.from({ length: 48 }, (_, i) => `box-${i}`).map((key) => (
                <div
                  className="h-12 shrink-0 rounded-xl border bg-muted"
                  key={key}
                />
              ))}
            </div>
          </DrawerPanel>
        </DrawerPopup>
      </Drawer>
    );
  },
};
