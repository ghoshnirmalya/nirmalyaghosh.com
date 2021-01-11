import Page from "components/pages/docs/base";
import fs from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Head from "next/head";
import path from "path";
import IDoc from "types/doc";

const root = process.cwd();

interface IProps {
  docs: IDoc[];
}

const DocsIndexPage: NextPage<IProps> = ({ docs }) => {
  return (
    <>
      <Head>
        <title>Documents</title>
      </Head>
      <Page docs={docs} />
    </>
  );
};

export async function getStaticProps() {
  const docsRoot = path.join(root, "data", "docs");
  const docs = fs.readdirSync(docsRoot).map((p) => {
    const content = fs.readFileSync(
      path.join(docsRoot, p, "01-index.mdx"),
      "utf8"
    );

    return {
      slug: p.replace(/\.mdx/, ""),
      content,
      frontMatter: matter(content).data,
    };
  });

  return {
    props: {
      docs,
    },
  };
}

export default DocsIndexPage;
