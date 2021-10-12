import Page from "components/pages/index/base/index";
import { getAllArticles } from "lib/get-articles-data";
import { GetStaticProps, NextPage } from "next";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";
import IArticle from "types/article";
import IPublication from "types/publication";

interface IProps {
  articles: (IArticle & IPublication)[];
}

const IndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <Page articles={articles} projects={projects} publications={publications} />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: getAllArticles(),
    },
  };
};

export default IndexPage;
