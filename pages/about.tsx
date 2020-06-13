import Page from "components/pages/about/base";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Page />
    </>
  );
};

export default AboutPage;
