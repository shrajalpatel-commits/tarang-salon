// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // MUST import this manually for Netlify/Vercel

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // We must inject Nitro into the plugins array so Lovable doesn't ignore it
  vite: {
    plugins: [
      nitro({
        preset: "netlify",
      }),
    ],
    // This stops the TanStack packages from crashing the SSR server build
    ssr: {
      external: ["@tanstack/react-query", "@tanstack/react-router"],
    },
  },
});