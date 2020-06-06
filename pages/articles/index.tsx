import Page from "components/pages/articles/base";
import { getSortedPostsData } from "lib/extract-posts-from-markdown";
import { NextPage } from "next";
import IArticle from "types/article";
import Head from "next/head";

interface Props {
  articles: IArticle[];
}

const ArticlesIndexPage: NextPage<Props> = ({ articles = [] }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Page articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  const articles = getSortedPostsData();

  return {
    props: {
      articles,
    },
  };
}

export default ArticlesIndexPage;
