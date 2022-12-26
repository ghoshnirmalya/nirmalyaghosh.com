import siteConfig from "configs/site";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";

function generateSiteMap(articles: IArticle[]) {
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
           <lastmod>${article.publishedDate}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
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
