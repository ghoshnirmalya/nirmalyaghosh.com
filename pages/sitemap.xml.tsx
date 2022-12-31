import siteConfig from "config/site";
import { Article } from "contentlayer/generated";
import { getAllArticles } from "lib/get-articles-data";

function generateSiteMap(articles: Article[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${siteConfig.details.url}</loc>
     </url>
     <url>
       <loc>${`${siteConfig.details.url}/articles`}</loc>
     </url>
     ${articles
       .map((article) => {
         return `
       <url>
           <loc>${`${siteConfig.details.url}/articles/${article.slug}`}</loc>
           <lastmod>${article.lastmod}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const articles = getAllArticles();
  const publishedArticles = articles.filter(
    (article: Article) => !article.draft
  );

  const sitemap = generateSiteMap(publishedArticles);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
