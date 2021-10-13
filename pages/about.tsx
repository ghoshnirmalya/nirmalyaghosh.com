import { SlideFade } from "@chakra-ui/react";
import Page from "components/pages/about/base";
import { NextPage } from "next";
import Head from "next/head";

const AboutPage: NextPage = () => {
  return (
    <SlideFade in>
      <Head>
        <title>About Me</title>
      </Head>
      <Page />
    </SlideFade>
  );
};

export default AboutPage;
