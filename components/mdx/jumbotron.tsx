import {
  Box,
  Heading,
  HStack,
  Link as _Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoLogoGithub, IoMdEye } from "react-icons/io";

interface IProps {
  heading: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

const Jumbotron: FC<IProps> = ({
  heading,
  description,
  githubLink,
  demoLink,
}) => {
  const githubButtonNode = () => {
    if (!githubLink) {
      return false;
    }

    return (
      <_Link
        py={2}
        px={4}
        href={githubLink}
        rounded="md"
        bg="#333"
        color="#fff"
        fontWeight="bold"
        isExternal
        textDecoration="none"
      >
        <HStack spacing={2} alignItems="center">
          <Box as={IoLogoGithub} />
          <Box>View source</Box>
        </HStack>
      </_Link>
    );
  };

  const demoButtonNode = () => {
    if (!demoLink) {
      return false;
    }

    return (
      <_Link
        py={2}
        px={4}
        href={demoLink}
        rounded="md"
        bg="#754abb"
        color="#fff"
        fontWeight="bold"
        isExternal
      >
        <HStack spacing={2} alignItems="center">
          <Box as={IoMdEye} />
          <Box>View demo</Box>
        </HStack>
      </_Link>
    );
  };

  return (
    <VStack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={[4, 12, 16]}
    >
      <Box>
        <Heading as="h1" fontFamily="body" bgColor="#65F8ED" bgClip="text">
          {heading}
        </Heading>
      </Box>
      <Box>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            {githubButtonNode()}
            {demoButtonNode()}
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
