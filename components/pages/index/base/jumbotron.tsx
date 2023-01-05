import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import Image from "next/image";
import AvatarImage from "public/images/common/avatar.png";

const Jumbotron: FC = () => {
  return (
    <VStack
      spacing={4}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={12}
    >
      <Box
        bgGradient="linear(to-l, #79c2ff, #4a5888)"
        rounded="full"
        p={1}
        w={100}
        h={100}
      >
        <Image
          src={AvatarImage}
          alt="Nirmalya Ghosh"
          height={100}
          width={100}
          quality={100}
          priority
          placeholder="blur"
        />
      </Box>
      <Box>
        <Heading
          as="h1"
          fontFamily="body"
          bgColor="blue.400"
          bgClip="text"
          size="2xl"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          Nirmalya Ghosh
        </Heading>
      </Box>
      <Text fontSize="xl">
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
          size="sm"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          Passionate about{" "}
          <Box as="span" color="gray.300">
            User
          </Box>{" "}
          and{" "}
          <Box as="span" color="gray.300">
            Developer Experience
          </Box>{" "}
          .
        </Heading>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
