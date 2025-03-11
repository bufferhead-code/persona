// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), favicons()],

  vite: {
    plugins: [tailwindcss()],
  },
});
