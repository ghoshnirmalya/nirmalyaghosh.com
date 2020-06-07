import React, { FC } from "react";
import { theme, useColorMode } from "@chakra-ui/core";
import { brandColorState } from "components/navbar";
import { selector, useRecoilValue } from "recoil";
import { Global, css } from "@emotion/core";
import { prismDarkTheme, prismLightTheme } from "styles/code";

const Container: FC = ({ children }) => {
  const brandColorSelector = selector({
    key: "brandColorSelector", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const brandColor = get(brandColorState);

      return brandColor;
    },
  });

  const brandColor = useRecoilValue(brandColorSelector);
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
