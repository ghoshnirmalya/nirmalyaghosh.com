import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { FC } from "react";
import typographyStyles from "styles/typography";
import prismStyles from "styles/prism";
import generalStyles from "styles/general";

const Container: FC = ({ children }) => {
  return (
    <Box
      bg="gray.900"
      color="gray.200"
      minH="100vh"
      bgGradient={["linear(to-tr, gray.700, gray.900)"]}
    >
      <Global styles={typographyStyles} />
      <Global styles={generalStyles} />
      <Global styles={prismStyles} />
      {children}
    </Box>
  );
};

export default Container;
