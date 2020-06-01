import Page from "components/pages/index";
import { getSortedPostsData } from "lib/posts";
import { NextPage } from "next";
import IArticle from "types/article";
import IPublication from "types/publication";
import publicationsData from "public/data/publications.json";

interface Props {
  articles: IArticle[];
  publications: IPublication[];
}

const IndexPage: NextPage<Props> = ({ articles, publications }) => {
  return <Page articles={articles} publications={publications} />;
};

export async function getStaticProps() {
  const articles = getSortedPostsData();
  const publications = publicationsData;

  return {
    props: {
      articles,
      publications,
    },
  };
}

export default IndexPage;
