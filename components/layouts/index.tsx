import React, { FC } from "react";
import { ThemeProvider, CSSReset, DarkMode, theme } from "@chakra-ui/core";
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
      <DarkMode>
        <CSSReset />
        <Container>{children}</Container>
      </DarkMode>
    </ThemeProvider>
  );
};

export default Layout;
