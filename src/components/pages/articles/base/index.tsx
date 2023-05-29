"use client";

import { Box } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import { getAllArticles } from "lib/get-articles-data";
import pick from "lodash/pick";
import dynamic from "next/dynamic";
import publications from "public/data/publications.json";
import Publication from "types/publication";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

const Page = () => {
  const articles = getAllArticles().map((articles) =>
    pick(articles, ["date", "description", "title", "slug"])
  );

  const allArticlesAndPublications = [
    ...articles,
    ...publications,
  ] as (Article & Publication)[];

  const sortedAllArticlesAndPublications: (Article & Publication)[] =
    allArticlesAndPublications.sort(
      (a: Article & Publication, b: Article & Publication) => {
        return Number(new Date(b.date)) - Number(new Date(a.date));
      }
    );

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Articles articles={sortedAllArticlesAndPublications} />
    </Box>
  );
};

export default Page;
