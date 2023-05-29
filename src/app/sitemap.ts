import { MetadataRoute } from "next";

import { getAllArticles } from "lib/get-articles-data";

import siteConfig from "config/site";

import { Article } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedArticles = getAllArticles().filter(
    (article: Article) => !article.draft,
  );

  return publishedArticles.map((article) => {
    return {
      url: `${siteConfig.details.url}/articles/${article.slug}`,
      lastModified: article.lastmod,
    };
  });
}
