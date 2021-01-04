import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IProject from "types/project";

const Projects = dynamic(
  import(/* webpackChunkName: "Projects" */ "components/layouts/projects")
);

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Projects projects={projects} />
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
