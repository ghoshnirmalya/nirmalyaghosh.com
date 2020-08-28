import Page from "components/pages/newsletter/base";
import { NextPage } from "next";
import Head from "next/head";

const NewsletterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Newsletter</title>
      </Head>
      <Page />
    </>
  );
};

export default NewsletterPage;
