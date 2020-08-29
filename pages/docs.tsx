import Page from "components/pages/docs/base";
import { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { frontMatter } from "./docs/*.mdx";

const DocsIndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Docs</title>
      </Head>
      <Page docs={frontMatter} />
    </>
  );
};

export default DocsIndexPage;
