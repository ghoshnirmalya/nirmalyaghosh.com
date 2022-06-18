import {
  Box,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC, useState } from "react";
import Project from "types/project";

interface Props {
  projects: Project[];
  hideViewAllLinksNode?: boolean;
}

const Projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/projects" passHref>
        <ChakraLink
          p={2}
          href="/projects"
          rounded="sm"
          fontSize="sm"
          borderWidth={1}
          borderColor="transparent"
          _hover={{
            textDecoration: "none",
            borderWidth: 1,
            borderColor: "gray.700",
            bg: "gray.900",
          }}
        >
          <Box color="gray.300">View all stats</Box>
        </ChakraLink>
      </Link>
    );
  };

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg" color="white">
          Stats
        </Heading>
        {viewAllLinksNode()}
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
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <VStack spacing={8}>
        {sortedProjects.map((project: Project, index: number) => {
          return (
            <ChakraLink
              key={index}
              bg="gray.900"
              color="white"
              rounded="sm"
              href={project.url}
              isExternal
              w="100%"
              _hover={{}}
              borderWidth={1}
              borderColor="gray.700"
            >
              <Box p={4}>
                <VStack spacing={4} justifyContent="space-between" align="left">
                  <VStack spacing={1} align="left">
                    {titleNode(project.title)}
                    {descriptionNode(project.description)}
                  </VStack>
                </VStack>
              </Box>
            </ChakraLink>
          );
        })}
      </VStack>
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
