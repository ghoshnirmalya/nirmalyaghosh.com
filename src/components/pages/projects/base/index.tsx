"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { getAllProjects } from "lib/get-projects-data";

const Projects = dynamic(
  () => import(/* webpackChunkName: "Projects" */ "components/layouts/projects")
);

const Page = () => {
  const projects = getAllProjects();

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Projects projects={projects} />
    </Box>
  );
};

export default Page;
