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
    <Box borderBottomWidth={1} borderTopWidth={6} borderTopColor="brandColor">
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
              <_Link>My Home</_Link>
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
