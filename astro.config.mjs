import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 80,
  },
});