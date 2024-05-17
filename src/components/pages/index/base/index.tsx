import { Box, Flex } from "@chakra-ui/react";
import pick from "lodash/pick";
import Publication from "src/types/publication";

import Articles from "components/layouts/articles";
import Projects from "components/layouts/projects";
import Jumbotron from "components/pages/index/base/jumbotron";

import { getAllArticles } from "lib/get-articles-data";
import { getAllProjects } from "lib/get-projects-data";

import { Article } from "contentlayer/generated";

const Page = () => {
  const projects = getAllProjects();
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"]),
  );

  const allArticlesAndPublications = [...articles, ...[]] as (Article &
    Publication)[];

  const sortedAllArticlesAndPublications: (Article & Publication)[] =
    allArticlesAndPublications.sort(
      (a: Article & Publication, b: Article & Publication) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      },
    );

  return (
    <Flex as="main" direction="column">
      <Box
        bgColor="gray.900"
        bgGradient={["conic(gray.800, gray.900,gray.800)"]}
      >
        <Box maxW="2xl" mx="auto" px={8} py={24}>
          <Jumbotron />
        </Box>
      </Box>

      <Box bgColor="gray.900" borderColor="gray.700" borderTopWidth={1}>
        <Box as="main" maxW="2xl" mx="auto" py={16} px={[8, 8, 8, 0]}>
          <Projects
            projects={projects.slice(0, 10)}
            headingLevel="h2"
            hideSearch
          />
        </Box>
      </Box>

      <Box bgColor="gray.900" borderColor="gray.700" borderTopWidth={1}>
        <Box as="main" maxW="2xl" mx="auto" py={16} px={[8, 8, 8, 0]}>
          <Articles
            articles={sortedAllArticlesAndPublications.slice(0, 5)}
            headingLevel="h2"
            hideSearch
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default Page;
