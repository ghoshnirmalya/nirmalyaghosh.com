import Articles from "components/Articles";
import siteConfig from "configs/site";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        canonical={siteConfig.details.url}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: siteConfig.assets.avatar,
              alt: siteConfig.details.title,
              type: "image/jpeg",
            },
          ],
          siteName: siteConfig.details.title,
        }}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
      />
      <Articles articles={articles} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchAllArticles();
  const publishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Published
  );

  return {
    props: {
      articles: publishedArticles,
    },
    revalidate: 60,
  };
};

export default ArticlesIndexPage;
