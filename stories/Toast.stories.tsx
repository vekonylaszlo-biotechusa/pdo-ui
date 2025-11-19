import type { Meta, StoryObj } from "@storybook/react";
import { toastManager, ToastProvider } from "../src/toast";
import { Button } from "../src/button";

const meta = {
  title: "Example/Toast",
  component: ToastProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Button
        onClick={() =>
          toastManager.add({
            title: "Event has been created",
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        Show
      </Button>
    </ToastProvider>
  ),
};

export const Action: Story = {
  render: () => (
    <ToastProvider>
      <Button
        onClick={() => {
          const id = toastManager.add({
            actionProps: {
              children: "Undo",
              onClick: () => {
                toastManager.close(id);
                toastManager.add({
                  description: "The action has been reverted.",
                  title: "Action undone",
                  type: "info",
                });
              },
            },
            description: "You can undo this action.",
            timeout: 1000000,
            title: "Action performed",
            type: "success",
          });
        }}
        variant="outline"
      >
        Perform Action
      </Button>
    </ToastProvider>
  ),
};

export const WithPromise: Story = {
  render: () => (
    <ToastProvider>
      <Button
        onClick={() => {
          toastManager.promise(
            new Promise<string>((resolve, reject) => {
              const shouldSucceed = Math.random() > 0.3;
              setTimeout(() => {
                if (shouldSucceed) {
                  resolve("Data loaded successfully");
                } else {
                  reject(new Error("Failed to load data"));
                }
              }, 2000);
            }),
            {
              error: () => ({
                description: "Please try again.",
                title: "Something went wrong",
              }),
              loading: {
                description: "The promise is loading.",
                title: "Loading…",
              },
              success: (data: string) => ({
                description: `Success: ${data}`,
                title: "This is a success toast!",
              }),
            },
          );
        }}
        variant="outline"
      >
        Run Promise
      </Button>
    </ToastProvider>
  ),
};
