import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@binder": "/packages/binder/src",
    },
  },
  test: {
    globals: true,
  },
});
