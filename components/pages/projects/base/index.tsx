import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import Project from "types/project";

const Projects = dynamic(
  () => import(/* webpackChunkName: "Projects" */ "components/layouts/projects")
);

interface Props {
  projects: Project[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  return (
    <SlideFade in>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Projects projects={projects} />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
