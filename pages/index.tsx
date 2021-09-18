import Page from "components/pages/index/base/index";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import path from "path";
import projects from "public/data/projects.json";
import publications from "public/data/publications.json";
import IArticle from "types/article";
import IPublication from "types/publication";

const root = process.cwd();

interface IProps {
  articles: (IArticle & IPublication)[];
}

const IndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <Page articles={articles} projects={projects} publications={publications} />
  );
};

export async function getStaticProps() {
  const articlesRoot = path.join(root, "data", "articles");
  const articles = fs.readdirSync(articlesRoot).map((p) => {
    const content = fs.readFileSync(path.join(articlesRoot, p), "utf8");

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  return {
    props: {
      articles,
    },
  };
}

export default IndexPage;

export const config = {
  unstable_runtimeJS: false,
};
