import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/core";
import IArticle from "types/article";
import dynamic from "next/dynamic";

const Articles = dynamic(import("components/articles"));
const SocialLinks = dynamic(import("components/social-links"));

interface Props {
  articles: IArticle[];
}

const Page: FC<Props> = ({ articles = [] }) => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
        <Stack spacing={16} order={[2, 2, 2, 1]}>
          <Box as="section">
            <Articles articles={articles} hideViewAllLinksNode />
          </Box>
        </Stack>
        <Box order={[1, 1, 1, 2]}>
          <Box position="sticky" top={100}>
            <SocialLinks />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
