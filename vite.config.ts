import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite"; // 👈 Add the Tailwind compiler
import tsconfigPaths from "vite-tsconfig-paths"; // 👈 Add folder mapping support
import path from "path";

export default defineConfig({
  plugins: [
    tsconfigPaths(), // Processes path routing smoothly
    tailwindcss(),   // Dynamically compiles all Tailwind styles
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});