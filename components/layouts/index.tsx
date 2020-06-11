import React, { FC } from "react";
import { ThemeProvider, CSSReset, LightMode, theme } from "@chakra-ui/core";
import Container from "components/layouts/container";

const Layout: FC = ({ children }) => {
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <LightMode>
        <CSSReset />
        <Container>{children}</Container>
      </LightMode>
    </ThemeProvider>
  );
};

export default Layout;
