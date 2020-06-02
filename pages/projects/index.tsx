import Page from "components/pages/projects/base";
import { NextPage } from "next";
import IProject from "types/project";
import projectsData from "public/data/projects.json";

interface Props {
  projects: IProject[];
}

const ProjectsIndexPage: NextPage<Props> = ({ projects = [] }) => {
  return <Page projects={projects} />;
};

export async function getStaticProps() {
  const projects = projectsData;

  return {
    props: {
      projects,
    },
  };
}

export default ProjectsIndexPage;
