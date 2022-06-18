import Page from "components/pages/about/base";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About CO2.Storage</title>
      </Head>
      <Page />
    </>
  );
};

export default AboutPage;
