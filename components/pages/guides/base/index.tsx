import { Box, Grid, SlideFade } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Guide } from ".contentlayer/types";

const Guides = dynamic(
  () => import(/* webpackChunkName: "guides" */ "components/layouts/guides")
);

interface Props {
  guides: Guide[];
}

const Page: FC<Props> = ({ guides = [] }) => {
  return (
    <SlideFade in>
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <Guides guides={guides} />
          </Box>
        </Grid>
      </Box>
    </SlideFade>
  );
};

export default Page;
