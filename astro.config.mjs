import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  // If you're using content collections, you no longer need to enable them
  // as they are enabled by default in newer Astro versions
  ]});