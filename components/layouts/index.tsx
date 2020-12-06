import React, { FC } from "react";
import { ChakraProvider, LightMode, theme } from "@chakra-ui/react";
import Container from "components/layouts/container";

const Layout: FC = ({ children }) => {
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
    },
    fonts: {
      ...theme.fonts,
      heading: "'Noto Serif', serif",
      body: "'Inter', sans-serif",
      mono: "Menlo, Monaco, Consolas, Courier New, monospace",
    },
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Container>{children}</Container>
    </ChakraProvider>
  );
};

export default Layout;
