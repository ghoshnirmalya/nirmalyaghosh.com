import { Box, Grid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import IDoc from "types/doc";

const Docs = dynamic(
  import(/* webpackChunkName: "Docs" */ "components/layouts/docs")
);

interface Props {
  docs: IDoc[];
}

const Page: FC<Props> = ({ docs = [] }) => {
  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Docs docs={docs} hideViewAllLinksNode />
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
