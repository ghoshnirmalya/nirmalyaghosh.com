import { Box } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Wrapper: FC<IProps> = ({ children }) => {
  return (
    <Box w="100%" bg="gray.900" p={2} rounded="sm" fontSize="sm" mb={8}>
      {children}
    </Box>
  );
};

export default Wrapper;
