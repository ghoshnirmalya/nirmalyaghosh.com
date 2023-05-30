"use client";

import { Box } from "@chakra-ui/react";

import Projects from "components/layouts/projects";

import { getAllProjects } from "lib/get-projects-data";

const Page = () => {
  const projects = getAllProjects();

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Projects projects={projects} />
    </Box>
  );
};

export default Page;
