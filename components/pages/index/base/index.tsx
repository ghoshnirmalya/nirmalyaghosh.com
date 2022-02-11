import { Box, VStack } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import Project from "types/project";

const Jumbotron = dynamic(
  () =>
    import(
      /* webpackChunkName: "Jumbotron" */ "components/pages/index/base/jumbotron"
    )
);
const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);
const Projects = dynamic(
  () =>
    import(
      /* webpackChunkName: "Projects" */ "components/pages/index/base/projects"
    )
);

interface Props {
  articles: Article[];
  projects: Project[];
}

const Page: FC<Props> = ({ articles = [], projects = [] }) => {
  const sortedArticles = articles.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <>
      <Box
        as="section"
        h={["calc(100vh - 109px)", "calc(100vh - 109px)", "calc(100vh - 64px)"]}
        d="flex"
        alignItems="center"
        maxW="2xl"
        mx="auto"
        px={4}
      >
        <Jumbotron />
      </Box>
      <Box>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <VStack spacing={32} order={[2, 2, 2, 1]} align="left">
            <Box as="section">
              <Articles articles={sortedArticles.slice(0, 10)} />
            </Box>
            <Box as="section">
              <Projects projects={projects.slice(0, 10)} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Page;
