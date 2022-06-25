import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(),  partytown(), sitemap()],
  markdown:{
    remarkPlugins: [
      'remark-gfm',
    ]
  }
});
