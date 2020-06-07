import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/core";
import IPublication from "types/publication";
import dynamic from "next/dynamic";

const Publications = dynamic(import("components/publications"));
const SocialLinks = dynamic(import("components/social-links"));

interface Props {
  publications: IPublication[];
}

const Page: FC<Props> = ({ publications = [] }) => {
  return (
    <Box maxW="6xl" mx="auto" px={4} py={8}>
      <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
        <Stack spacing={16} order={[2, 2, 2, 1]}>
          <Box as="section">
            <Publications publications={publications} hideViewAllLinksNode />
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
