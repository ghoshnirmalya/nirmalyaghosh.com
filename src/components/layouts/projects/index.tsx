"use client";

import { Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import Project from "types/project";

interface IProps {
  projects: Project[];
  headingLevel?: "h1" | "h2";
}

const Projects = ({ projects = [], headingLevel = "h1" }: IProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as={headingLevel} size="md" color="blue.100">
          Projects
        </Heading>
        <Text color="blue.100" fontSize="sm">
          Open Source Projects developed and available on Github
        </Text>
      </VStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="sm" lineHeight="tall" color="blue.400">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return (
      <Text color="blue.100" fontSize="sm">
        {description}
      </Text>
    );
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid templateColumns="repeat(2, 1fr)" gap={12} w="100%">
        {sortedProjects.map((project: Project, index: number) => {
          return (
            <GridItem key={index} w="100%">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <VStack spacing={0} align="left">
                  {titleNode(project.title)}
                  {descriptionNode(project.description)}
                </VStack>
              </a>
            </GridItem>
          );
        })}
      </Grid>
    );
  };

  return (
    <VStack spacing={12} align="left">
      {headingNode()}
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
