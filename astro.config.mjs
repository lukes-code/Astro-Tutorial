import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://sunny-pasca-13b4ff.netlify.app/",
  integrations: [preact()]
});