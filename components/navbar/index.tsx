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
  const navbarBgColor = { light: "white", dark: "gray.900" };
  const navbarColor = { light: "gray.900", dark: "white" };

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
      shadow="md"
      fontWeight="bold"
    >
      <Box maxW="6xl" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          p={4}
          spacing={4}
        >
          <Box>
            <Link href="/">
              <_Link p={2} href="/" rounded="md">
                Home
              </_Link>
            </Link>
          </Box>
          <Box>
            <Stack isInline spacing={4} alignItems="center">
              <Box>
                <Link href="/projects">
                  <_Link p={2} href="/projects" rounded="md">
                    Projects
                  </_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/articles">
                  <_Link p={2} href="/articles" rounded="md">
                    Articles
                  </_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/publications">
                  <_Link p={2} href="/publications" rounded="md">
                    Publications
                  </_Link>
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
