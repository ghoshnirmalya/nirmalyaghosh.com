import Page from "components/pages/index/base/index";
import { Article } from "contentlayer/generated";
import { getAllArticles } from "lib/get-articles-data";
import pick from "lodash/pick";
import sortBy from "lodash/sortBy";
import { GetStaticProps, NextPage } from "next";
import projects from "public/data/projects.json";
import Project from "types/project";

interface IProps {
  articles: Article[];
  projects: Project[];
}

const IndexPage: NextPage<IProps> = ({ articles, projects }) => {
  return <Page articles={articles} projects={projects} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      articles: sortBy(articles, ["date"]).reverse().slice(0, 5),
      projects: projects.slice(0, 5),
    },
  };
};

export default IndexPage;
