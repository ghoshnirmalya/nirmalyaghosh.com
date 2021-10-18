import Page from "components/pages/articles/base";
import { getAllArticles } from "lib/get-articles-data";
import { NextPage } from "next";
import Head from "next/head";
import publications from "public/data/publications.json";

const ArticlesIndexPage: NextPage = () => {
  const articles = getAllArticles();

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Page articles={articles} publications={publications} />
    </>
  );
};

export default ArticlesIndexPage;
