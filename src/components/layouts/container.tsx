import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { FC, ReactNode } from "react";
import generalStyles from "styles/general";
import prismStyles from "styles/prism";
import typographyStyles from "styles/typography";

interface IProps {
  children?: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return (
    <Box
      bg="black"
      bgGradient="linear(to-br, gray.900, gray.800)"
      color="gray.200"
      minH="100vh"
    >
      <Global styles={typographyStyles} />
      <Global styles={generalStyles} />
      <Global styles={prismStyles} />
      {children}
    </Box>
  );
};

export default Container;
