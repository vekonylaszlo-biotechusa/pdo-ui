import type { Decorator, Preview } from '@storybook/react';
import '../src/styles.css';

export const decorator: Decorator = (Story, context) => {
  const theme = context.globals.theme;

  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <div
      data-theme={theme}
      style={{
        background: 'var(--background)',
        width: '700px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          {
            value: 'light',
            title: 'Light',
          },
          {
            value: 'dark',
            title: 'Dark',
          },
          {
            value: 'oblivion',
            title: 'Oblivion',
          },
          {
            value: 'linear',
            title: 'Linear',
          },
        ],
      },
    },
  },
  decorators: [decorator],
};

export default preview;
