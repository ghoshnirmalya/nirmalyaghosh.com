import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IArticle from "types/article";

const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: IArticle[];
  currentCategory: string;
}

const Page: FC<Props> = ({ articles = [], currentCategory }) => {
  const sortedArticles: IArticle[] = articles.sort(
    (a: IArticle, b: IArticle) => {
      return Number(new Date(b.data?.date)) - Number(new Date(a.data?.date));
    }
  );

  return (
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
  );
};

export default Page;
