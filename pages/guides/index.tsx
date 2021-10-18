import Page from "components/pages/guides/base";
import { getAllGuides } from "lib/get-guides.data";
import { NextPage } from "next";
import Head from "next/head";

const guidesIndexPage: NextPage = () => {
  const guides = getAllGuides();

  return (
    <>
      <Head>
        <title>Guides</title>
      </Head>
      <Page guides={guides} />
    </>
  );
};

export default guidesIndexPage;
