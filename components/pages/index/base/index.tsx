import { Box, VStack } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import Project from "types/project";

const Jumbotron = dynamic(
  () =>
    import(
      /* webpackChunkName: "Jumbotron" */ "components/pages/index/base/jumbotron"
    )
);

const Projects = dynamic(
  () =>
    import(
      /* webpackChunkName: "Projects" */ "components/pages/index/base/projects"
    )
);

interface Props {
  projects: Project[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  return (
    <VStack spacing={26} as="main" p={8}>
      <Box as="section" maxW="2xl" mx="auto" w="100%">
        <Jumbotron />
      </Box>
      <Box as="section" maxW="2xl" mx="auto" w="100%" pb={8}>
        <Projects projects={projects.slice(0, 5)} />
      </Box>
    </VStack>
  );
};

export default Page;
