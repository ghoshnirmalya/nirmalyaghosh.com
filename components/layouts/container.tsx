import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { FC } from "react";
import { prismDarkTheme } from "styles/code";
import { customStyles } from "styles/custom";

const Container: FC = ({ children }) => {
  return (
    <Box bg="gray.900" color="gray.200" minH="100vh">
      <Global styles={prismDarkTheme} />
      <Global styles={customStyles} />
      {children}
    </Box>
  );
};

export default Container;
