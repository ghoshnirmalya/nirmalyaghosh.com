import { Guide } from ".contentlayer/types";
import Page from "components/pages/guides/[slug]";
import { getAllGuides, getCurrentGuide } from "lib/get-guides.data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";

interface IProps {
  currentGuide: Guide;
}

const GuidesSlugPage: NextPage<IProps> = ({ currentGuide }) => {
  return <Page guide={currentGuide} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllGuides().map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentGuide = getCurrentGuide(params);

  return {
    props: {
      currentGuide,
    },
  };
};

export default GuidesSlugPage;
