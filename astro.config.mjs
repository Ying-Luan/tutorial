// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://euphonious-pudding-d9f5ca.netlify.app/",
  integrations: [preact()],
});