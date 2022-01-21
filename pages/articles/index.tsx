import { Article } from ".contentlayer/types";
import Page from "components/pages/articles/base";
import { getAllArticles } from "lib/get-articles-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import publications from "public/data/publications.json";
import pick from "lodash/pick";

interface IProps {
  articles: Article[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Page articles={articles} publications={publications} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      articles,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default ArticlesIndexPage;
