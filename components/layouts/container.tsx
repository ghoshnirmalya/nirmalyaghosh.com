import React, { FC } from "react";
import { useColorMode, Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { prismDarkTheme, prismLightTheme } from "styles/code";

const Container: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "gray.100", dark: "black" };
  const sectionColor = { light: "black", dark: "gray.100" };

  const codeStyles = {
    light: prismLightTheme,
    dark: prismDarkTheme,
  };

  return (
    <Box
      bg={sectionBgColor[colorMode]}
      color={sectionColor[colorMode]}
      minH="100vh"
    >
      <Global styles={codeStyles[colorMode]} />
      {children}
    </Box>
  );
};

export default Container;
