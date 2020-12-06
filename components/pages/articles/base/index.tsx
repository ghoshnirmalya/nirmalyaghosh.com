import React, { FC } from "react";
import { Box, Grid } from "@chakra-ui/react";
import IArticle from "types/article";
import dynamic from "next/dynamic";
import withNavbarLayout from "lib/with-navbar-layout";

const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: IArticle[];
}

const Page: FC<Props> = ({ articles = [] }) => {
  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Articles articles={articles} hideViewAllLinksNode />
        </Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
