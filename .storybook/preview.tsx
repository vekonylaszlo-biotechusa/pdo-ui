import type { Decorator, Preview } from "@storybook/react";
import "../src/styles.css";

export const decorator: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div
      data-theme={theme}
      style={{
        background: "var(--background)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        items: [
          {
            value: "light",
            title: "Light",
          },
          {
            value: "dark",
            title: "Dark",
          },
          {
            value: "marathon",
            title: "Marathon",
          },
        ],
      },
    },
  },
  decorators: [decorator],
};

export default preview;
