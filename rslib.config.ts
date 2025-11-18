import { pluginReact } from "@rsbuild/plugin-react";
import path from "node:path";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  source: {
    entry: {
      index: ["./src/**"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: "esm",
    },
  ],
  output: {
    target: "web",
    emitCss: true,
    copy: {
      patterns: [
        {
          from: "./src/index.css",
          to: "./styles.css",
        },
      ],
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
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    config: "./postcss.config.mjs",
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
