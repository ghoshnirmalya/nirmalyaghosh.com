import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import BlurImage from "components/image";
import { FC, useState } from "react";
import Project from "types/project";

interface Props {
  projects: Project[];
  headingLevel?: "h1" | "h2";
}

const Projects: FC<Props> = ({ projects = [], headingLevel = "h1" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as={headingLevel} size="lg" color="white">
          Projects
        </Heading>
        <Text>Open Source Projects developed and available on Github</Text>
      </VStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" lineHeight="tall" color="blue.400">
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
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)"]}
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
                <VStack align="left">
                  {project.image && (
                    <Box
                      bgGradient="linear(to-r, green.200, pink.500)"
                      paddingLeft={12}
                      paddingTop={12}
                    >
                      <Box roundedTopLeft="lg" overflow="hidden">
                        <BlurImage
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={600 / 1.5}
                          sizes="100vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                  <VStack spacing={1} align="left" padding={4}>
                    {titleNode(project.title)}
                    {descriptionNode(project.description)}
                  </VStack>
                </VStack>
              </a>
            </Box>
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
