import { LearnGuide } from ".contentlayer/types";
import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const Guides = dynamic(
  () => import(/* webpackChunkName: "guides" */ "components/layouts/learn")
);

interface Props {
  guides: LearnGuide[];
}

const Page: FC<Props> = ({ guides = [] }) => {
  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Guides guides={guides} />
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
