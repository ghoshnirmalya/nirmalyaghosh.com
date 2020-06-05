import React, { FC } from "react";
import { Box, Grid, Stack, useColorMode } from "@chakra-ui/core";
import IArticle from "types/article";
import IPublication from "types/publication";
import IProject from "types/project";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const Jumbotron = dynamic(import("components/pages/index/jumbotron"));
const Articles = dynamic(import("components/articles"));
const Publications = dynamic(import("components/publications"));
const Projects = dynamic(import("components/projects"));
const SocialLinks = dynamic(import("components/social-links"));
interface Props {
  articles: IArticle[];
  publications: IPublication[];
  projects: IProject[];
}

const Page: FC<Props> = ({
  articles = [],
  publications = [],
  projects = [],
}) => {
  const { colorMode } = useColorMode();
  const jumbotronSectionBgColor = { light: "gray.100", dark: "black" };
  const jumbotronSectionColor = { light: "black", dark: "gray.100" };
  const sectionBgColor = { light: "white", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "white" };

  return (
    <>
      <Box
        as="section"
        bg={jumbotronSectionBgColor[colorMode]}
        color={jumbotronSectionColor[colorMode]}
      >
        <Box maxW="6xl" mx="auto" p={4}>
          <Jumbotron />
        </Box>
      </Box>
      <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
        <Box maxW="6xl" mx="auto" px={4} py={8}>
          <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
            <Stack spacing={16} order={[2, 2, 2, 1]}>
              <Box as="section">
                <LazyLoad once offset={100}>
                  <Articles articles={articles.slice(0, 3)} />
                </LazyLoad>
              </Box>
              <Box as="section">
                <LazyLoad once offset={100}>
                  <Publications publications={publications.slice(0, 3)} />
                </LazyLoad>
              </Box>
            </Stack>
            <Box order={[1, 1, 1, 2]}>
              <Stack spacing={16} position="sticky" top={100}>
                <Box>
                  <LazyLoad once offset={100}>
                    <SocialLinks />
                  </LazyLoad>
                </Box>
                <Box>
                  <LazyLoad once offset={100}>
                    <Projects projects={projects.slice(0, 3)} />
                  </LazyLoad>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
