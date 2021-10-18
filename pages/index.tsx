import Page from "components/pages/index/base/index";
import { getAllArticles } from "lib/get-articles-data";
import { NextPage } from "next";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";

const IndexPage: NextPage = () => {
  const articles = getAllArticles();

  return (
    <Page articles={articles} projects={projects} publications={publications} />
  );
};

export default IndexPage;
