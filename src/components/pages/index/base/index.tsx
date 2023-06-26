"use client";

import { Box } from "@chakra-ui/react";

import Jumbotron from "components/pages/index/base/jumbotron";

const Page = () => {
  return (
    <Box
      as="main"
      bgColor="gray.900"
      bgGradient={["linear(to-br, gray.800, #181924)"]}
      display="flex"
      alignItems="center"
      flex="1"
    >
      <Box maxW="2xl" mx="auto" px={8}>
        <Jumbotron />
      </Box>
    </Box>
  );
};

export default Page;
