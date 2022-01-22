import { LearnGuide } from ".contentlayer/types";
import Page from "components/pages/learn/[slug]";
import {
  getAllLearnGuides,
  getCurrentLearnGuide,
} from "lib/get-learn-guides.data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IProps {
  currentLearnGuide: LearnGuide;
}

const LearnGuidesSlugPage: NextPage<IProps> = ({ currentLearnGuide }) => {
  return <Page guide={currentLearnGuide} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllLearnGuides().map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLearnGuide = getCurrentLearnGuide(params);

  return {
    props: {
      currentLearnGuide,
    },
  };
};

export default LearnGuidesSlugPage;
