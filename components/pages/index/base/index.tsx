import { Box, VStack } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { FC } from "react";
import Project from "types/project";
import Tilt from "react-parallax-tilt";

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
    <VStack spacing={32} as="main">
      <Box
        as="section"
        w="100%"
        bgColor="gray.900"
        bgGradient={["linear(to-br, gray.800, #181924)"]}
      >
        <Tilt
          tiltEnable={false}
          glareEnable
          glareMaxOpacity={0.8}
          glareColor="#000"
          glarePosition="all"
        >
          <Box maxW="2xl" mx="auto" px={8} pb={16}>
            <Jumbotron />
          </Box>
        </Tilt>
      </Box>
      <Box as="section" maxW="2xl" mx="auto" w="100%" px={8}>
        <Articles articles={sortedArticles.slice(0, 10)} headingLevel="h2" />
      </Box>
      <Box as="section" maxW="2xl" mx="auto" w="100%" px={8} pb={8}>
        <Projects projects={projects.slice(0, 10)} headingLevel="h2" />
      </Box>
    </VStack>
  );
};

export default Page;
