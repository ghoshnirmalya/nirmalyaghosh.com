import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/core";
import IArticle from "types/article";
import dynamic from "next/dynamic";
import withNavbarLayout from "lib/with-navbar-layout";

const Articles = dynamic(import("components/articles"));

interface Props {
  articles: IArticle[];
}

const Page: FC<Props> = ({ articles = [] }) => {
  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Stack spacing={16}>
          <Box as="section">
            <Articles articles={articles} hideViewAllLinksNode />
          </Box>
        </Stack>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
