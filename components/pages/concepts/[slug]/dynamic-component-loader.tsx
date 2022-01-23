import { Center } from "@chakra-ui/react";
import { FC } from "react";

const DynamicComponentLoader: FC = () => {
  return (
    <Center
      bg="gray.800"
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
