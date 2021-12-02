import { Article } from ".contentlayer/types";
import Page from "components/pages/index/base/index";
import { getAllArticles } from "lib/get-articles-data";
import { GetStaticProps, NextPage } from "next";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";
import pick from "lodash/pick";

interface IProps {
  articles: Article[];
}

const IndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <Page articles={articles} projects={projects} publications={publications} />
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

export default IndexPage;
