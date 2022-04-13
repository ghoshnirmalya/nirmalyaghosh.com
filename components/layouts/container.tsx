import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { FC, ReactNode } from "react";
import typographyStyles from "styles/typography";
import prismStyles from "styles/prism";
import generalStyles from "styles/general";

interface IProps {
  children?: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return (
    <Box bg="black" color="gray.200" minH="100vh">
      <Global styles={typographyStyles} />
      <Global styles={generalStyles} />
      <Global styles={prismStyles} />
      {children}
    </Box>
  );
};

export default Container;
