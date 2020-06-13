import React, { FC } from "react";
import { Box, Grid } from "@chakra-ui/core";
import dynamic from "next/dynamic";
import withNavbarLayout from "lib/with-navbar-layout";

const Page: FC = () => {
  return (
    <Box maxW="3xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">Hello world</Box>
      </Grid>
    </Box>
  );
};

export default withNavbarLayout(Page);
