import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

import BlurImage from "components/image";

import AvatarImage from "public/images/common/avatar.png";

const Jumbotron: FC = () => {
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
            size={["md", "md", "lg", "xl"]}
            bgGradient="linear(to-l, #79c2ff, #4a5888)"
            className="jumbotron-name-heading"
          >
            Nirmalya Ghosh
          </Heading>
        </Box>
        <Text fontSize={["sm", "lg", "xl", "xl"]} color="blue.100">
          Founding Engineer at Mintlify
        </Text>
        <Box>
          <Heading
            as="h2"
            fontSize={["sm", "sm", "sm", "lg"]}
            lineHeight="tall"
            color="gray.500"
            fontWeight="medium"
          >
            Passionate about{" "}
            <Box as="span" color="blue.100">
              User
            </Box>{" "}
            and{" "}
            <Box as="span" color="blue.100">
              Developer Experience
            </Box>
            .
          </Heading>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Jumbotron;
