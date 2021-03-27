import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { FC } from "react";
import { prismDarkTheme } from "styles/code";

const Container: FC = ({ children }) => {
  return (
    <Box bg="black" color="gray.100" minH="100vh">
      <Global styles={prismDarkTheme} />
      {children}
    </Box>
  );
};

export default Container;
