import { Box, HStack, Text, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";

const Callout: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "blue.100", dark: "blue.900" };
  const cardColor = { light: "black", dark: "white" };

  return (
    <Box
      p={4}
      rounded="md"
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
    >
      <HStack spacing={2}>
        <Box fontSize={48}>💡</Box>
        <Box>{children}</Box>
      </HStack>
    </Box>
  );
};

export default Callout;
