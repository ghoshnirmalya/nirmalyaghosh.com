import Page from "components/pages/index";
import { getSortedPostsData } from "lib/extract-posts-from-markdown";
import { NextPage } from "next";
import IArticle from "types/article";
import IPublication from "types/publication";
import IProject from "types/project";
import publicationsData from "public/data/publications.json";
import projectsData from "public/data/projects.json";
import Head from "next/head";
import siteConfig from "config/site";

interface Props {
  articles: IArticle[];
  publications: IPublication[];
  projects: IProject[];
}

const IndexPage: NextPage<Props> = ({
  articles = [],
  publications = [],
  projects = [],
}) => {
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
  const articles = getSortedPostsData();
  const publications = publicationsData;
  const projects = projectsData;

  return {
    props: {
      articles,
      publications,
      projects,
    },
  };
}

export default IndexPage;
