import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Container from "components/layouts/container";
import { FC, ReactNode } from "react";
import "@fontsource/open-sans";

export const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Open+Sans', sans-serif",
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
