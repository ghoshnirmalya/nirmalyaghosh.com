import { Box, HStack } from "@chakra-ui/react";
import React, { FC } from "react";

const Callout: FC = ({ children }) => {
  return (
    <Box p={4} rounded="sm" bg="blue.900" color="white">
      <HStack spacing={2}>
        <Box fontSize={48}>💡</Box>
        <Box>{children}</Box>
      </HStack>
    </Box>
  );
};

export default Callout;
