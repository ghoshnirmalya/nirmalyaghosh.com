import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nirmalyaghosh.com",
  integrations: [tailwind(), partytown(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        "rehype-img-size",
        {
          dir: "public",
        },
      ],
    ],
    remarkPlugins: ["remark-gfm", "remark-external-links"],
    shikiConfig: {
      theme: "github-light",
    },
  },
});
