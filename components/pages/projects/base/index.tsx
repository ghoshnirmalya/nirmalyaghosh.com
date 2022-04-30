import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FC } from "react";
import Project from "types/project";

const Projects = dynamic(
  () => import(/* webpackChunkName: "Projects" */ "components/layouts/projects")
);

interface Props {
  projects: Project[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  return (
    <Box as="main" maxW="6xl" mx="auto" p={8}>
      <Projects projects={projects} />
    </Box>
  );
};

export default Page;
