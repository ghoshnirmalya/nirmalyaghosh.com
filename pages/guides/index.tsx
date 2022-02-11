import { Guide } from "contentlayer/generated";
import Page from "components/pages/guides/base";
import { getAllGuides } from "lib/get-guides-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import pick from "lodash/pick";

interface IProps {
  guides: Guide[];
}

const GuidesIndexPage: NextPage<IProps> = ({ guides }) => {
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
  const guides = getAllGuides().map((guides) =>
    pick(guides, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      guides,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default GuidesIndexPage;
