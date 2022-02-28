import { Box, HStack, VStack } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  address?: string;
}

const MockBrowser: FC<IProps> = ({
  address = "http://localhost:3000",
  children,
}) => {
  return (
    <VStack spacing={4} w="100%">
      <VStack spacing={0} w="100%">
        <HStack
          w="100%"
          bg="gray.700"
          p={2}
          roundedTop="sm"
          borderBottomWidth={2}
          borderBottomColor="gray.900"
          fontSize="xs"
        >
          <HStack w="100%">
            <Box p={1} rounded="sm" w="100%">
              {address}
            </Box>
          </HStack>
          <Box bg="green.500" w={2} h={2} rounded="full" />
          <Box bg="yellow.500" w={2} h={2} rounded="full" />
          <Box bg="red.500" w={2} h={2} rounded="full" />
        </HStack>
        <Box
          w="100%"
          h={64}
          bg="gray.700"
          p={2}
          roundedBottom="sm"
          fontSize="sm"
        >
          {children}
        </Box>
      </VStack>
    </VStack>
  );
};

export default MockBrowser;
