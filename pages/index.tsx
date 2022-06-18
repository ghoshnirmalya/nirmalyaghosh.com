import Page from "components/pages/index/base/index";
import { Article } from "contentlayer/generated";
import { getAllArticles } from "lib/get-articles-data";
import pick from "lodash/pick";
import { GetStaticProps, NextPage } from "next";
import projects from "public/data/projects.json";
import Project from "types/project";

interface IProps {
  articles: Article[];
  projects: Project[];
}

const IndexPage: NextPage<IProps> = ({ projects }) => {
  return <Page projects={projects} />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: projects.slice(0, 5),
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default IndexPage;
