import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ArticleStatus, IArticle } from "types/article";
import fetchAllArticles from "utils/fetch-all-articles";

interface IProps {
  articles: IArticle[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <div>{JSON.stringify(articles, null, 2)}</div>
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
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default ArticlesIndexPage;
