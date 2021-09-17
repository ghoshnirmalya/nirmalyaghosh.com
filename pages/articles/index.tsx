import Page from "components/pages/articles/base";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Head from "next/head";
import path from "path";
import IArticle from "types/article";
import IPublication from "types/publication";
import publications from "public/data/publications.json";

const root = process.cwd();

interface IProps {
  articles: (IArticle & IPublication)[];
}

const ArticlesIndexPage: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Page articles={articles} publications={publications} />
    </>
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

export default ArticlesIndexPage;

export const config = {
  unstable_runtimeJS: false,
};
