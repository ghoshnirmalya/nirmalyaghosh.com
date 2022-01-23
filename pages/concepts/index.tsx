import { Concept } from ".contentlayer/types";
import Page from "components/pages/concepts/base";
import { getAllConcepts } from "lib/get-concepts-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import pick from "lodash/pick";

interface IProps {
  concepts: Concept[];
}

const ConceptsIndexPage: NextPage<IProps> = ({ concepts }) => {
  return (
    <>
      <Head>
        <title>Concepts</title>
      </Head>
      <Page concepts={concepts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const concepts = getAllConcepts().map((concepts) =>
    pick(concepts, ["date", "description", "title", "slug"])
  );

  return {
    props: {
      concepts,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

export default ConceptsIndexPage;
