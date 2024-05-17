"use client";

import { Grid, GridItem, Heading, Input, Text, VStack } from "@chakra-ui/react";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";

import Project from "types/project";

interface IProps {
  projects: Project[];
  headingLevel?: "h1" | "h2";
  hideSearch?: boolean;
}

const Projects = ({
  projects = [],
  headingLevel = "h1",
  hideSearch = false,
}: IProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(projects);

  const fuse = new Fuse(projects, {
    keys: ["title"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(projects);

      return;
    }

    const results = fuse.search(searchQuery);
    const filteredResults = results.map((result) => result.item);

    setSearchResults(filteredResults);
  }, [searchQuery]);

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
    if (!searchResults.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={12}
        w="100%"
      >
        {searchResults.map((project: Project, index: number) => {
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

  const searchBarNode = () => {
    if (hideSearch) {
      return null;
    }

    return (
      <Input
        type="text"
        placeholder="Search projects..."
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        borderColor="gray.700"
        fontSize="sm"
      />
    );
  };

  return (
    <VStack spacing={12} align="left">
      <VStack spacing={4} align="left">
        {headingNode()}
        {searchBarNode()}
      </VStack>
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
