import { FC } from "react";
import {
  Box,
  Stack,
  Link as _Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBgColor = { light: "white", dark: "black" };
  const navbarColor = { light: "black", dark: "white" };

  const themeSwitcherButtonNode = () => {
    if (colorMode === "light") {
      return (
        <IconButton
          aria-label="Switch to dark theme"
          icon="moon"
          size="sm"
          onClick={toggleColorMode}
        />
      );
    }

    return (
      <IconButton
        aria-label="Switch to light theme"
        icon="sun"
        size="sm"
        onClick={toggleColorMode}
      />
    );
  };

  return (
    <Box
      borderTopWidth={6}
      borderTopColor="brandColor"
      bg={navbarBgColor[colorMode]}
      color={navbarColor[colorMode]}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Box maxW="6xl" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          p={4}
          spacing={8}
        >
          <Box>
            <Link href="/">
              <_Link>Home</_Link>
            </Link>
          </Box>
          <Box>
            <Stack isInline spacing={8} alignItems="center">
              <Box>
                <Link href="/projects">
                  <_Link>Projects</_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/articles">
                  <_Link>Articles</_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/publications">
                  <_Link>Publications</_Link>
                </Link>
              </Box>
              <Box>{themeSwitcherButtonNode()}</Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
