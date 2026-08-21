import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { llmProxyPlugin } from "./src/lib/llm-proxy-plugin";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeFilePrefix: undefined,
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    llmProxyPlugin(),
  ],
  build: {
    outDir: "dist",
  },
});
