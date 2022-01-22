import { LearnGuide } from ".contentlayer/types";
import Page from "components/pages/learn/base";
import { getAllLearnGuides } from "lib/get-learn-guides.data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import pick from "lodash/pick";

interface IProps {
  learnGuides: LearnGuide[];
}

const LearnGuidesIndexPage: NextPage<IProps> = ({ learnGuides }) => {
  return (
    <>
      <Head>
        <title>Guides</title>
      </Head>
      <Page guides={learnGuides} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const learnGuides = getAllLearnGuides().map((guides) =>
    pick(guides, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      learnGuides,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default LearnGuidesIndexPage;
