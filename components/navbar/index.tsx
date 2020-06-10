import React, { FC } from "react";
import {
  Box,
  Stack,
  Link as _Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarSectionBgColor = { light: "white", dark: "gray.900" };
  const navbarSectionColor = { light: "dark.900", dark: "white" };

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

  const mobileMenuNode = () => {
    return (
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList placement="bottom-end">
          <Link href="/">
            <MenuItem>
              <_Link p={2} href="/" rounded="md">
                Home
              </_Link>
            </MenuItem>
          </Link>
          <Link href="/projects">
            <MenuItem>
              <_Link p={2} href="/projects" rounded="md">
                Projects
              </_Link>
            </MenuItem>
          </Link>
          <Link href="/articles">
            <MenuItem>
              <_Link p={2} href="/articles" rounded="md">
                Articles
              </_Link>
            </MenuItem>
          </Link>
          <Link href="/publications">
            <MenuItem>
              <_Link p={2} href="/publications" rounded="md">
                Publications
              </_Link>
            </MenuItem>
          </Link>
          <MenuItem onClick={toggleColorMode} px={6}>
            Switch color mode
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };

  const desktopMenuNode = () => {
    return (
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
    );
  };

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1}
      bg={navbarSectionBgColor[colorMode]}
      color={navbarSectionColor[colorMode]}
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
          <Box display={["none", "none", "block", "block"]}>
            {desktopMenuNode()}
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            {mobileMenuNode()}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
