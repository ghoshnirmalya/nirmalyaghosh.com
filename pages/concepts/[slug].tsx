import { Concept } from ".contentlayer/types";
import Page from "components/pages/concepts/[slug]";
import { getAllConcepts, getCurrentConcept } from "lib/get-concepts-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IProps {
  currentConcept: Concept;
}

const ConceptsSlugPage: NextPage<IProps> = ({ currentConcept }) => {
  return <Page concept={currentConcept} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllConcepts().map((concept) => {
      return {
        params: {
          slug: concept.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentConcept = getCurrentConcept(params);

  return {
    props: {
      currentConcept,
    },
  };
};

export default ConceptsSlugPage;
