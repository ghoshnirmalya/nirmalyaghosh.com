import { Box, VStack } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { FC } from "react";
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
  () => import(/* webpackChunkName: "Projects" */ "components/layouts/projects")
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
    <VStack spacing={32} as="main" p={8}>
      <Box as="section" maxW="2xl" mx="auto" w="100%">
        <Jumbotron />
      </Box>
      <Box as="section" maxW="2xl" mx="auto" w="100%">
        <Articles articles={sortedArticles.slice(0, 10)} />
      </Box>
      <Box as="section" maxW="2xl" mx="auto" w="100%" pb={8}>
        <Projects projects={projects.slice(0, 10)} />
      </Box>
    </VStack>
  );
};

export default Page;
