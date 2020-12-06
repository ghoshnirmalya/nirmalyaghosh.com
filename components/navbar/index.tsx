import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Link as _Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/articles",
    title: "Articles",
  },
  {
    url: "/publications",
    title: "Publications",
  },
  {
    url: "/docs",
    title: "Documents",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/newsletter",
    title: "Newsletter",
  },
];

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarSectionBgColor = { light: "white", dark: "gray.900" };
  const navbarSectionColor = { light: "dark.900", dark: "white" };

  const themeSwitcherButtonNode = () => {
    if (colorMode === "light") {
      return (
        <IconButton
          aria-label="Switch to dark theme"
          icon={<MoonIcon />}
          size="sm"
          onClick={toggleColorMode}
        />
      );
    }

    return (
      <IconButton
        aria-label="Switch to light theme"
        icon={<SunIcon />}
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
          {[
            LINKS.map((link: NavLink) => {
              return (
                <Box key={link.url}>
                  <Link href={link.url}>
                    <MenuItem>
                      <_Link href={link.url} rounded="md">
                        {link.title}
                      </_Link>
                    </MenuItem>
                  </Link>
                </Box>
              );
            }),
          ]}
          <MenuItem onClick={toggleColorMode} px={4}>
            Switch color mode
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };

  const desktopMenuNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url}>
                  <_Link p={4} href={link.url} rounded="md">
                    {link.title}
                  </_Link>
                </Link>
              </Box>
            );
          }),
        ]}
        <Box px={2}>{themeSwitcherButtonNode()}</Box>
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
          py={4}
        >
          <Box>
            <Link href="/">
              <_Link p={4} href="/" rounded="md">
                Home
              </_Link>
            </Link>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            {desktopMenuNode()}
          </Box>
          <Box display={["block", "block", "block", "none"]} px={4}>
            {mobileMenuNode()}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
