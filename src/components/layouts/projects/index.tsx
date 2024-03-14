import { Heading, Text, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";

import Project from "types/project";

interface Props {
  projects: Project[];
  headingLevel?: "h1" | "h2";
}

const Projects: FC<Props> = ({ projects = [], headingLevel = "h1" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: Project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const headingNode = () => {
    return (
      <VStack spacing={2} align="left">
        <Heading as={headingLevel} size="lg" color="blue.100">
          Projects
        </Heading>
        <Text color="blue.100">
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
    return <Text color="blue.100">{description}</Text>;
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
      <VStack align="left" spacing={8}>
        {sortedProjects.map((project: Project, index: number) => {
          return (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VStack spacing={0} align="left">
                {titleNode(project.title)}
                {descriptionNode(project.description)}
              </VStack>
            </a>
          );
        })}
      </VStack>
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
