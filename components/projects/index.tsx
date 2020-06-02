import { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  PseudoBox,
  Link as _Link,
  useColorMode,
  Button,
} from "@chakra-ui/core";
import Link from "next/link";
import IProject from "types/project";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Props {
  projects: IProject[];
  hideViewAllLinksNode?: boolean;
}

const projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.100", dark: "black" };
  const cardColor = { light: "black", dark: "gray.100" };

  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/projects">
        <_Link p={2} href="/projects" rounded="md" color="brandColor">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all projects</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg">
          Projects
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h4" size="md" color="brandColor">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text>{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button
        rightIcon="arrow-forward"
        bg="brandColor"
        color="white"
        _hover={{ bg: "brandColor", color: "white" }}
      >
        View project
      </Button>
    );
  };

  return (
    <Box position="sticky" top={100}>
      {headingNode()}
      <Stack spacing={4}>
        {projects.map((project: IProject, index: number) => {
          return (
            <Box key={index}>
              <a href={project.url} target="_blank">
                <PseudoBox
                  rounded="md"
                  bg={cardBgColor[colorMode]}
                  color={cardColor[colorMode]}
                >
                  <Stack isInline p={4} spacing={4}>
                    <Stack>
                      <Stack
                        spacing={4}
                        justifyContent="space-between"
                        h="full"
                      >
                        <Stack spacing={4}>
                          {titleNode(project.title)}
                          {descriptionNode(project.title)}
                        </Stack>
                        <Box>{ctaNode()}</Box>
                      </Stack>
                    </Stack>
                  </Stack>
                </PseudoBox>
              </a>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default projects;
