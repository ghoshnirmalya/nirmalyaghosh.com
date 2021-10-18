import { Box, Heading, Link as _Link, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import Project from "types/project";

interface Props {
  projects: Project[];
  hideViewAllLinksNode?: boolean;
}

const projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/projects" passHref>
        <_Link p={2} href="/projects" rounded="sm">
          <Box color="gray.300">View all projects</Box>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl" color="gray.300">
          Projects
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const projectsNode = () => {
    return projects.map((project: Project, index: number) => {
      return (
        <Box key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <VStack spacing={1} align="left">
              {titleNode(project.title)}
              {descriptionNode(project.description)}
            </VStack>
          </a>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {projectsNode()}
    </VStack>
  );
};

export default projects;
