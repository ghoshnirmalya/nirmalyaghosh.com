"use client";

import { Box } from "@chakra-ui/react";

import Guides from "components/layouts/guides";

const Page = () => {
  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Guides />
    </Box>
  );
};

export default Page;
