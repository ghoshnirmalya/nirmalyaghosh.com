import React, { FC } from "react";
import { useColorMode } from "@chakra-ui/core";
import { Global } from "@emotion/core";
import { prismDarkTheme, prismLightTheme } from "styles/code";

const Container: FC = ({ children }) => {
  const { colorMode } = useColorMode();

  const codeStyles = {
    light: prismLightTheme,
    dark: prismDarkTheme,
  };

  return (
    <>
      <Global styles={codeStyles[colorMode]} />
      {children}
    </>
  );
};

export default Container;
