import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Container from "components/layouts/container";
import React, { FC, ReactNode } from "react";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Source Sans Pro', sans-serif",
    body: "'Inter', sans-serif",
  },
});

interface IProps {
  children?: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Container>{children}</Container>
    </ChakraProvider>
  );
};

export default Layout;
