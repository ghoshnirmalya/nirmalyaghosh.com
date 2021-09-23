import Page from "components/pages/guides/base";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import path from "path";
import IGuide from "types/guide";

const root = process.cwd();

interface IProps {
  guides: IGuide[];
}

const guidesIndexPage: NextPage<IProps> = ({ guides }) => {
  return (
    <>
      <Head>
        <title>Guides</title>
      </Head>
      <Page guides={guides} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const guidesRoot = path.join(root, "data", "guides");
  const guides = fs.readdirSync(guidesRoot).map((p) => {
    const content = fs.readFileSync(
      path.join(guidesRoot, p, "01-index.mdx"),
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
      guides,
    },
  };
};

export default guidesIndexPage;
