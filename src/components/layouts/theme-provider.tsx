"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import Navbar from "components/navbar";

import generalStyles from "styles/general";
import prismStyles from "styles/prism";
import typographyStyles from "styles/typography";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <Box
          bg="black"
          bgGradient="linear(to-br, gray.900, gray.800)"
          color="gray.200"
          minH="100vh"
        >
          <Global styles={typographyStyles} />
          <Global styles={generalStyles} />
          <Global styles={prismStyles} />
          <Navbar />
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
