import React, { FC } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import IProject from "types/project";
import withNavbarLayout from "lib/with-navbar-layout";

interface Props {
  projects: IProject[];
}

const Page: FC<Props> = ({ projects = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const headingNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        <Box>
          <Image
            objectFit="cover"
            src="/images/common/projects.svg"
            alt="Projects"
            size={20}
            bg={cardColor[colorMode]}
            color={cardBgColor[colorMode]}
            rounded="full"
            p={2}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            <Heading as="h2" size="xl">
              Projects
            </Heading>
            <Text>Open Source Projects developed and available on Github</Text>
          </Stack>
        </Box>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text>{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon="external-link" fontSize="sm">
        View project
      </Button>
    );
  };

  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Stack spacing={8}>
        {headingNode()}
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {projects.map((project: IProject, index: number) => {
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
      </Stack>
    </Box>
  );
};

export default withNavbarLayout(Page);
