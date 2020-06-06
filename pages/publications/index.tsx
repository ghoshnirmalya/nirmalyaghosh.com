import Page from "components/pages/publications/base";
import { NextPage } from "next";
import IPublication from "types/publication";
import publicationsData from "public/data/publications.json";
import Head from "next/head";

interface Props {
  publications: IPublication[];
}

const PublicationsIndexPage: NextPage<Props> = ({ publications = [] }) => {
  return (
    <>
      <Head>
        <title>Publications</title>
      </Head>
      <Page publications={publications} />
    </>
  );
};

export async function getStaticProps() {
  const publications = publicationsData;

  return {
    props: {
      publications,
    },
  };
}

export default PublicationsIndexPage;
