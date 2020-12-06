import React, { FC } from "react";
import { Box, Grid } from "@chakra-ui/react";
import IPublication from "types/publication";
import dynamic from "next/dynamic";
import withNavbarLayout from "lib/with-navbar-layout";

const Publications = dynamic(
  import(
    /* webpackChunkName: "Publications" */ "components/layouts/publications"
  )
);

interface Props {
  publications: IPublication[];
}

const Page: FC<Props> = ({ publications = [] }) => {
  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <Publications publications={publications} hideViewAllLinksNode />
        </Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
