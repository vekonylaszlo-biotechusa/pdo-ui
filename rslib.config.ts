import path from 'node:path';
import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**/*.{ts,tsx}', '!./src/global.d.ts', '!./src/styles-entry.ts'],
      styles: ['./src/styles-entry.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    emitCss: true,
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    config: './postcss.config.mjs',
                  },
                },
              },
            ],
          },
        ],
      },
    },
  },
});
