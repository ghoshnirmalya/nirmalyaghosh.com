import { Box, HStack, Link as _Link, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoLogoGithub, IoMdEye } from "react-icons/io";

interface IProps {
  description: string;
  githubLink: string;
  demoLink: string;
}

const Jumbotron: FC<IProps> = ({ description, githubLink, demoLink }) => {
  const githubButtonNode = () => {
    if (!githubLink) {
      return false;
    }

    return (
      <_Link
        py={2}
        px={4}
        href={githubLink}
        rounded="sm"
        bg="gray.600"
        color="white"
        fontWeight="bold"
        isExternal
        textDecoration="none"
        borderWidth={1}
        borderColor="gray.500"
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
        rounded="sm"
        bg="blue.600"
        color="white"
        fontWeight="bold"
        isExternal
        borderWidth={1}
        borderColor="blue.400"
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
      spacing={0}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pb={12}
    >
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
