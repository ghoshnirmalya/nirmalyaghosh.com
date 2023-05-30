import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";

import Articles from "components/layouts/articles";

import { Article } from "contentlayer/generated";

interface Props {
  articles: Article[];
  currentCategory: string;
}

const Page: FC<Props> = ({ articles = [], currentCategory }) => {
  const sortedArticles: Article[] = articles.sort((a: Article, b: Article) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Articles
            articles={sortedArticles}
            currentCategory={currentCategory}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
