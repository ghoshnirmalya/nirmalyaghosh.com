import { Concept } from ".contentlayer/types";
import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const Concepts = dynamic(
  () => import(/* webpackChunkName: "concepts" */ "components/layouts/concept")
);

interface Props {
  concepts: Concept[];
}

const Page: FC<Props> = ({ concepts = [] }) => {
  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Concepts concepts={concepts} />
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
