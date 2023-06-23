"use client";

import { Box } from "@chakra-ui/react";

import Jumbotron from "components/pages/index/base/jumbotron";

const Page = () => {
  return (
    <Box
      as="section"
      w="100%"
      bgColor="gray.900"
      bgGradient={["linear(to-br, gray.800, #181924)"]}
      h="calc(100vh - 76px)"
      display="flex"
      alignItems="center"
    >
      <Box maxW="2xl" mx="auto" px={8}>
        <Jumbotron />
      </Box>
    </Box>
  );
};

export default Page;
