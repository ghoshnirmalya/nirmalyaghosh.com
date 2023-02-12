import { Guide } from "contentlayer/generated";
import Page from "components/pages/guides/base";
import { getAllGuides } from "lib/get-guides-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import pick from "lodash/pick";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";

interface IProps {
  guides: Guide[];
}

const GuidesIndexPage: NextPage<IProps> = ({ guides }) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}/guides`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page guides={guides} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const guides = getAllGuides().map((guides) =>
    pick(guides, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      guides,
    },
  };
};

export default GuidesIndexPage;
