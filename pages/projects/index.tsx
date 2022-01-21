import Page from "components/pages/projects/base";
import { getAllProjects } from "lib/get-projects-data";
import { NextPage } from "next";
import Head from "next/head";

const ProjectsIndexPage: NextPage = () => {
  const projects = getAllProjects();

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Page projects={projects} />
    </>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default ProjectsIndexPage;
