"use client";

import { Box } from "@chakra-ui/react";
import pick from "lodash/pick";

import Articles from "components/layouts/articles";

import { getAllArticles } from "lib/get-articles-data";

import Publication from "types/publication";

import publications from "public/data/publications.json";

import { Article } from "contentlayer/generated";

const Page = () => {
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"]),
  );

  const allArticlesAndPublications = [
    ...articles,
    ...publications,
  ] as (Article & Publication)[];

  const sortedAllArticlesAndPublications: (Article & Publication)[] =
    allArticlesAndPublications.sort(
      (a: Article & Publication, b: Article & Publication) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      },
    );

  return (
    <Box as="main" maxW="2xl" mx="auto" py={8} px={[8, 8, 8, 0]} w="100%">
      <Articles articles={sortedAllArticlesAndPublications} />
    </Box>
  );
};

export default Page;
