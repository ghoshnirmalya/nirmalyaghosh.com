import Page from "components/pages/guides/base";
import { getAllGuides } from "lib/get-guides.data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import IGuide from "types/guide";

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
  return {
    props: {
      guides: getAllGuides(),
    },
  };
};

export default guidesIndexPage;
