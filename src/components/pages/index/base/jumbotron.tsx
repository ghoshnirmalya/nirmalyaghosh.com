import { Box, HStack, Heading, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

import BlurImage from "components/image";

import AvatarImage from "public/images/common/avatar.png";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/articles",
    title: "Articles",
  },

  {
    url: "/about",
    title: "About",
  },
];

const Jumbotron: FC = () => {
  const menuNode = () => {
    const socialLinksNode = () => {
      return (
        <Box display="flex" alignItems="center" fontSize="sm">
          <HStack spacing={4}>
            <Link
              px={4}
              py={2}
              href="https://github.com/ghoshnirmalya"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
              }}
              _focus={{ outline: "none" }}
            >
              Github
            </Link>
            <Link
              px={4}
              py={2}
              href="https://www.linkedin.com/in/ghoshnirmalya/"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
              }}
              _focus={{ outline: "none" }}
            >
              LinkedIn
            </Link>
          </HStack>
        </Box>
      );
    };

    return (
      <HStack
        isInline
        spacing={[0, 4]}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
      >
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link
                  as={NextLink}
                  px={4}
                  py={2}
                  href={link.url}
                  rounded="sm"
                  fontSize="sm"
                  borderWidth={1}
                  borderColor="transparent"
                  _hover={{
                    textDecoration: "none",
                    bgColor: "gray.900",
                  }}
                  _focus={{ outline: "none" }}
                >
                  {link.title}
                </Link>
              </Box>
            );
          }),
        ]}
        {socialLinksNode()}
      </HStack>
    );
  };

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={8}
    >
      <VStack alignItems="center" justifyContent="center" textAlign="center">
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <BlurImage
            src={AvatarImage}
            alt="Nirmalya Ghosh"
            height={100}
            width={100}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <Heading
            as="h1"
            fontFamily="body"
            bgColor="blue.400"
            bgClip="text"
            size="xl"
            bgGradient="linear(to-l, #79c2ff, #4a5888)"
            className="jumbotron-name-heading"
          >
            Nirmalya Ghosh
          </Heading>
        </Box>
        <Text fontSize="xl">Staff Developer Advocate</Text>
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
            </Box>
            .
          </Heading>
        </Box>
      </VStack>
      {menuNode()}
    </VStack>
  );
};

export default Jumbotron;
