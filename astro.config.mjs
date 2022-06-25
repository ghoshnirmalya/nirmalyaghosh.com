import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),  partytown(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
  }
});
