import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IProject from "types/project";

const Jumbotron = dynamic(
  import(
    /* webpackChunkName: "Jumbotron" */ "components/pages/index/base/jumbotron"
  )
);
const Projects = dynamic(
  import(
    /* webpackChunkName: "Projects" */ "components/pages/index/base/projects"
  )
);

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({
  projects = [],
}) => {  

  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <Box>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <VStack spacing={32} order={[2, 2, 2, 1]} align="left">            
            <Box as="section">
              <Projects projects={projects.slice(0, 10)} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Page;
