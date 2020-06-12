import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/core";
import IProject from "types/project";
import dynamic from "next/dynamic";
import withNavbarLayout from "lib/with-navbar-layout";

const Projects = dynamic(import("components/layouts/projects"));

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Stack spacing={16}>
          <Box as="section">
            <Projects projects={projects} />
          </Box>
        </Stack>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
