import React, { FC } from "react";
import { Box, Stack, Heading, Text, useColorMode } from "@chakra-ui/core";

const Jumbotron: FC = () => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "white", dark: "gray.900" };
  const sectionColor = { light: "dark.900", dark: "white" };

  return (
    <Stack
      spacing={2}
      height="calc(100vh - 64px)"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      bg={sectionBgColor[colorMode]}
      color={sectionColor[colorMode]}
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
