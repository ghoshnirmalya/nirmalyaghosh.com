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
      position="relative"
    >
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        mx="auto"
        w="full"
        maxW="6xl"
        h="full"
      >
        <Box position="absolute" left={0} h="full" w="1px" bg="gray.700" />
        <Box position="absolute" right={0} h="full" w="1px" bg="gray.700" />
        <Box position="absolute" top="16rem" h="1px" w="full" bg="gray.700" />
        <Box position="absolute" top="15rem" h="1px" w="full" bg="gray.700" />
        <Box position="absolute" top="38rem" h="1px" w="full" bg="gray.700" />
        <Box position="absolute" top="39rem" h="1px" w="full" bg="gray.700" />
      </Box>

      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        mx="auto"
        w="full"
        maxW="lg"
        h="full"
      >
        <Box
          position="absolute"
          left={0}
          h="full"
          w="1px"
          bg="gray.700"
          zIndex={2222}
        />
        <Box position="absolute" right={0} h="full" w="1px" bg="gray.700" />
      </Box>

      <Box maxW="2xl" mx="auto" p={8} zIndex={2}>
        <Jumbotron />
      </Box>
    </Box>
  );
};

export default Page;
