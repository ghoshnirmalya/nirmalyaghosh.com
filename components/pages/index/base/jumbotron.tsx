import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";

const Jumbotron: FC = () => {
  return (
    <VStack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={12}
    >
      <Box>
        <Heading
          as="h1"
          fontFamily="body"
          bgColor="green.600"
          bgClip="text"
          size="4xl"
          padding="2"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          CO2.Storage
        </Heading>
      </Box>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          {" "}
          <Box as="span" color="gray.300">
            Free decentralized storage utility
          </Box>{" "}
          <Box as="span" color="gray.300">
            for Environmental Assets
          </Box>
          .{" "}
        </Heading>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
