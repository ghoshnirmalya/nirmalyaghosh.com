import Page from "components/pages/about/base";
import { NextPage } from "next";
import Head from "next/head";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}/about`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page />
    </>
  );
};

export default AboutPage;
