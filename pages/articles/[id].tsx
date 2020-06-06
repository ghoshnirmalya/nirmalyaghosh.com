import React, { FC } from "react";
import Head from "next/head";
import { getAllPostIds, getPostData } from "lib/extract-posts-from-markdown";
import Page from "components/pages/articles/show";
import IArticle from "types/article";

interface Props {
  article: IArticle;
}

const ArticlesShowPage: FC<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <link rel="stylesheet" href="/styles/code.css" />
      </Head>
      <article>
        <Page article={article} />
      </article>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = await getPostData(params.id);

  return {
    props: {
      article,
    },
  };
}

export default ArticlesShowPage;