import Page from "components/pages/articles/base";
import { getAllArticles } from "lib/get-articles-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import publications from "public/data/publications.json";
import IArticle from "types/article";
import IPublication from "types/publication";

interface IProps {
  articles: (IArticle & IPublication)[];
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
  return {
    props: {
      articles: getAllArticles(),
    },
  };
};

export default ArticlesIndexPage;
