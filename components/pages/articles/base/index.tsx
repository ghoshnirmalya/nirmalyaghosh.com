import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Article } from ".contentlayer/types";
import Publication from "types/publication";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: Article[];
  publications: Publication[];
}

const Page: FC<Props> = ({ articles = [], publications = [] }) => {
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
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Articles
              articles={sortedAllArticlesAndPublications}
              hideViewAllLinksNode
            />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
