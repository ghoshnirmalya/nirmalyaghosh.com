import Page from "components/pages/articles/base";
import { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { frontMatter as articles } from "./articles/*.mdx";

const ArticlesIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Page articles={articles} />
    </>
  );
};

export default ArticlesIndexPage;
