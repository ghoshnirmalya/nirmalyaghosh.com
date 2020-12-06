import React, { FC, useState, FormEvent } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  useColorMode,
  Input,
} from "@chakra-ui/react";
import IProject from "types/project";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: IProject) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg={cardBgColor[colorMode]}
          color={cardColor[colorMode]}
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
        <Stack spacing={2}>
          <Heading as="h1" size="xl">
            Projects
          </Heading>
          <Text>Open Source Projects developed and available on Github</Text>
        </Stack>
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
      <Button rightIcon={<ExternalLinkIcon />} fontSize="sm">
        View project
      </Button>
    );
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <Stack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No projects found!"
            size={64}
          />
          <Text>No projects found!</Text>
        </Stack>
      );
    }

    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {sortedProjects.map((project: IProject, index: number) => {
          return (
            <Box
              key={index}
              bg={cardBgColor[colorMode]}
              color={cardColor[colorMode]}
              p={8}
              rounded="md"
              shadow="md"
            >
              <a href={project.url} target="_blank" rel="noopener">
                <Box>
                  <Stack spacing={4} minH={48} justifyContent="space-between">
                    <Stack spacing={4}>
                      {titleNode(project.title)}
                      {descriptionNode(project.description)}
                    </Stack>
                    <Box>{ctaNode()}</Box>
                  </Stack>
                </Box>
              </a>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      {searchNode()}
      {projectsNode()}
    </Stack>
  );
};

export default Projects;
