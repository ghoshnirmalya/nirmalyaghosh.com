import Page from "components/pages/index";
import { getSortedPostsData } from "lib/posts";
import { NextPage } from "next";

interface Article {
  id: number;
  title: string;
}

interface Props {
  articles: Article[];
}

const IndexPage: NextPage<Props> = ({ articles }) => {
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

export default IndexPage;
