import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

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
      "rehype-plugin-image-native-lazy-loading",
    ],
    remarkPlugins: ["remark-gfm", "remark-external-links"],
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});
