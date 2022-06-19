import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import Project from "types/project";

interface Props {
  projects: Project[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="lg" color="white">
            Stats
          </Heading>
          <Text>High-level statistics about CO2.Storage</Text>
        </VStack>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" lineHeight="tall" color="green.500">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text color="gray.400">{description}</Text>;
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No Stats found!</Text>
        </VStack>
      );
    }

    return (
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={8}
      >
        {sortedProjects.map((project: Project, index: number) => {
          return (
            <Box
              key={index}
              bg="gray.900"
              color="white"
              rounded="sm"
              borderWidth={1}
              borderColor="gray.700"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Box p={8}>
                  <VStack
                    spacing={4}
                    minH={24}
                    justifyContent="space-between"
                    align="left"
                  >
                    <VStack spacing={1} align="left">
                      {titleNode(project.title)}
                      {descriptionNode(project.description)}
                    </VStack>
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
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
