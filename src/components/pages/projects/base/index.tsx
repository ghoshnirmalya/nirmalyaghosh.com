import { Box } from "@chakra-ui/react";

import Projects from "components/layouts/projects";

import { getAllProjects } from "lib/get-projects-data";

const Page = () => {
  const projects = getAllProjects();

  return (
    <Box as="main" maxW="2xl" mx="auto" py={8} px={[8, 8, 8, 0]} w="100%">
      <Projects projects={projects} />
    </Box>
  );
};

export default Page;
