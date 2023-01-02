import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
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
          bgColor="blue.400"
          bgClip="text"
          size="4xl"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          Nirmalya Ghosh
        </Heading>
      </Box>
      <Text fontSize="2xl">
        Staff Developer Advocate @
        <Link
          href="https://rapidapi.com/"
          isExternal
          _hover={{
            textDecoration: "none",
          }}
        >
          Rapid
        </Link>
      </Text>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          I&apos;m a{" "}
          <Box as="span" color="gray.300">
            Developer
          </Box>
          , who likes{" "}
          <Box as="span" color="gray.300">
            Designing,{" "}
          </Box>{" "}
          <Box as="span" color="gray.300">
            Writing
          </Box>{" "}
          and{" "}
          <Box as="span" color="gray.300">
            Building Open Source
          </Box>{" "}
          projects.
        </Heading>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
