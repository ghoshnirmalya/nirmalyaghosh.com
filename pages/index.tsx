import Page from "components/pages/index";
import { NextPage } from "next";
import IPublication from "types/publication";
import IProject from "types/project";
import publicationsData from "public/data/publications.json";
import projectsData from "public/data/projects.json";
import Head from "next/head";
import siteConfig from "config/site";
//@ts-ignore
import { frontMatter as articles } from "./articles/*.mdx";

interface Props {
  publications: IPublication[];
  projects: IProject[];
}

const IndexPage: NextPage<Props> = ({ publications = [], projects = [] }) => {
  return (
    <>
      <Head>
        <title>{`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}</title>
      </Head>
      <Page
        articles={articles}
        publications={publications}
        projects={projects}
      />
    </>
  );
};

export async function getStaticProps() {
  const publications = publicationsData;
  const projects = projectsData;

  return {
    props: {
      publications,
      projects,
    },
  };
}

export default IndexPage;
