import rss from "@astrojs/rss";
import siteConfig from "@utils/site";

export const get = () =>
  rss({
    title: siteConfig.details.title,
    description: siteConfig.details.description,
    site: siteConfig.details.url,
    items: import.meta.glob("../pages/articles/*.md"),
    customData: `<language>en-us</language>`,
    stylesheet: "/styles/rss.xsl",
  });
