import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import DeveloperAnimation from "components/Animations/developer";
import React, { FC } from "react";

const Jumbotron: FC = () => {
  return (
    <VStack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={[4, 12, 16, 24]}
    >
      <Box>
        <Heading as="h1" fontFamily="body" bgColor="#65F8ED" bgClip="text">
          Hi, I'm Pedro Bonifacio
        </Heading>
      </Box>
      <Box>
        <Text> 
          I'm a <Box as="b">Developer</Box>, who likes to{" "}
          <Box as="b">learn new things</Box> and <Box as="b">build cool things</Box>
        </Text>
          <DeveloperAnimation />
      </Box>
    </VStack>
  );
};

export default Jumbotron;
