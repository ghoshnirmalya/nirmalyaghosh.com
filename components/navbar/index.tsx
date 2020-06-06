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
  MenuOptionGroup,
  MenuItemOption,
  useColorMode,
  useTheme,
} from "@chakra-ui/core";
import Link from "next/link";
import { IoIosOptions } from "react-icons/io";
import { atom, useRecoilState } from "recoil";

const brandColorState = atom({
  key: "brandColor",
  default: "#00B5D8",
});

const Navbar: FC = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBgColor = { light: "white", dark: "gray.900" };

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

  const siteEditorButtonNode = () => {
    const [_, setBrandColor] = useRecoilState(brandColorState);

    return (
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} aria-label="Edit site" size="sm">
          <Box as={IoIosOptions} size="15px" />
        </MenuButton>
        <MenuList minWidth="200px" placement="bottom-end">
          <MenuOptionGroup
            defaultValue={theme.colors["cyan"][500]}
            title="Choose brand color"
            type="radio"
          >
            {[
              "Gray",
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Teal",
              "Blue",
              "Cyan",
              "Purple",
              "Pink",
            ].map((color: string, index: number) => {
              return (
                <MenuItemOption
                  key={index}
                  value={theme.colors[color.toLowerCase()][500]}
                  onClick={() =>
                    setBrandColor(theme.colors[color.toLowerCase()][500])
                  }
                >
                  <Stack key={index} isInline spacing={4} alignItems="center">
                    <Box
                      h={5}
                      w={5}
                      m={2}
                      bg={`${color.toLowerCase()}.500`}
                      rounded="full"
                      shadow="xl"
                      borderWidth={1}
                      borderColor="gray.100"
                      onClick={() =>
                        setBrandColor(theme.colors[color.toLowerCase()][500])
                      }
                    />
                    <span>{color}</span>
                  </Stack>
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
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
        <Box>{siteEditorButtonNode()}</Box>
      </Stack>
    );
  };

  return (
    <Box
      borderTopWidth={3}
      borderTopColor="brandColor"
      bg={navbarBgColor[colorMode]}
      color="brandColor"
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

export { brandColorState };

export default Navbar;
