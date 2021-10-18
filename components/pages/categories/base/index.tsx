import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Article } from ".contentlayer/types";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: Article[];
  currentCategory: string;
}

const Page: FC<Props> = ({ articles = [], currentCategory }) => {
  const sortedArticles: Article[] = articles.sort((a: Article, b: Article) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Articles
              articles={sortedArticles}
              hideViewAllLinksNode
              currentCategory={currentCategory}
            />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
