import Page from "components/pages/projects/base";
import { getAllProjects } from "lib/get-projects-data";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import IProject from "types/project";

interface Props {
  projects: IProject[];
}

const ProjectsIndexPage: NextPage<Props> = ({ projects = [] }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Page projects={projects} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: getAllProjects(),
    },
  };
};

export default ProjectsIndexPage;
