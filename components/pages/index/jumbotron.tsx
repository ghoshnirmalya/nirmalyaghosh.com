import React, { FC } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/core";

const Jumbotron: FC = () => {
  return (
    <Stack
      spacing={2}
      height="calc(100vh - 70px)"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box>
        <Heading as="h1" fontSize={["3rem", "4rem", "5rem", "6rem"]}>
          Nirmalya Ghosh
        </Heading>
      </Box>
      <Box>
        <Text>
          <Box as="b">Frontend Developer</Box> and <Box as="b">Designer</Box>
        </Text>
      </Box>
    </Stack>
  );
};

export default Jumbotron;
