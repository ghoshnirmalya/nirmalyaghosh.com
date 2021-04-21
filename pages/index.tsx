import Page from "components/pages/index/base/index";
import { NextPage } from "next";
import projects from "public/data/projects.json";
import IArticle from "types/article";
import IPublication from "types/publication";

const root = process.cwd();

interface IProps {
  articles: (IArticle & IPublication)[];
}

const IndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <Page  projects={projects} />
  );
};

export async function getStaticProps() {


  return {
    props: {
    },
  };
}

export default IndexPage;
