import { Center } from "@chakra-ui/react";
import { FC } from "react";

const DynamicComponentLoader = () => {
  return (
    <Center
      bg="gray.900"
      p={4}
      rounded="sm"
      color="gray.400"
      fontSize="sm"
      h={48}
    >
      Loading component...
    </Center>
  );
};

export default DynamicComponentLoader;
