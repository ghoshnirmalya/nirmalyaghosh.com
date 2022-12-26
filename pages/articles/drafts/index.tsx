import Articles from "components/Articles";
import siteConfig from "configs/site";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <NextSeo title={siteConfig.details.title} noindex nofollow />
      <Articles
        articles={articles}
        articlesStatus={ArticleStatus.Unpublished}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await fetchAllArticles();
  const unpublishedArticles = articles.filter(
    (article: IArticle) => article.status === ArticleStatus.Unpublished
  );

  return {
    props: {
      articles: unpublishedArticles,
    },
  };
};

export default ArticlesIndexPage;
