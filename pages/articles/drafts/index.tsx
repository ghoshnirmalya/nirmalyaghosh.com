import Articles from "components/Articles";
import siteConfig from "configs/site";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
}

const DraftArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Draft articles</title>

        <link rel="icon" type="image/x-icon" href={siteConfig.assets.favicon} />
        <link rel="canonical" href={siteConfig.details.url} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={siteConfig.details.title} />
        <meta name="description" content={siteConfig.details.description} />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content={siteConfig.details.title} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.details.url} />
        <meta property="og:title" content={siteConfig.details.title} />
        <meta
          property="og:description"
          content={siteConfig.details.description}
        />
        <meta property="og:image" content={siteConfig.assets.avatar} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.details.url} />
        <meta property="twitter:title" content={siteConfig.details.title} />
        <meta
          property="twitter:description"
          content={siteConfig.details.description}
        />
        <meta property="twitter:image" content={siteConfig.assets.avatar} />
      </Head>

      <Articles
        articles={articles}
        articlesStatus={ArticleStatus.Unpublished}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchAllArticles();
  const draftArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Unpublished
  );

  return {
    props: {
      articles: draftArticles,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default DraftArticlesIndexPage;
