import { Box } from "@chakra-ui/react";
import { FC } from "react";

const Wrapper: FC = ({ children }) => {
  return (
    <Box w="100%" bg="gray.800" p={2} rounded="sm" fontSize="sm" mb={8}>
      {children}
    </Box>
  );
};

export default Wrapper;
