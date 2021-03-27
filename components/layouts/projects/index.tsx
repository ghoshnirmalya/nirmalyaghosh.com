import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, FormEvent, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import IProject from "types/project";

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: IProject) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg="gray.900"
          color="white"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an project"
        />
      </Box>
    );
  };

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Projects
          </Heading>
          <Text>Open Source Projects developed and available on Github</Text>
        </VStack>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon={<IoMdArrowForward />} fontSize="sm">
        View project
      </Button>
    );
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Image
            src="/images/common/no-items.svg"
            alt="No projects found!"
            boxSize={64}
          />
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {sortedProjects.map((project: IProject, index: number) => {
          return (
            <Box
              key={index}
              bg="gray.900"
              color="white"
              rounded="md"
              shadow="md"
            >
              <a href={project.url} target="_blank" rel="noopener">
                <Box p={8}>
                  <VStack
                    spacing={4}
                    minH={48}
                    justifyContent="space-between"
                    align="left"
                  >
                    <VStack spacing={1} align="left">
                      {titleNode(project.title)}
                      {descriptionNode(project.description)}
                    </VStack>
                    <Box>{ctaNode()}</Box>
                  </VStack>
                </Box>
              </a>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {searchNode()}
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
