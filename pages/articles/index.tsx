import Page from "components/pages/articles/base";
import { getSortedPostsData } from "lib/posts";
import { NextPage } from "next";
import IArticle from "types/article";

interface Props {
  articles: IArticle[];
}

const ArticlesIndexPage: NextPage<Props> = ({ articles = [] }) => {
  return <Page articles={articles} />;
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
