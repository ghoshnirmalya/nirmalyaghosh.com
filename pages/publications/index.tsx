import Page from "components/pages/publications/base";
import { NextPage } from "next";
import IPublication from "types/publication";
import publicationsData from "public/data/publications.json";

interface Props {
  publications: IPublication[];
}

const PublicationsIndexPage: NextPage<Props> = ({ publications = [] }) => {
  return <Page publications={publications} />;
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
