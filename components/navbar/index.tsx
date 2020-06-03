import React, { FC } from "react";
import {
  Box,
  Stack,
  Link as _Link,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  useColorMode,
  useDisclosure,
  useTheme,
} from "@chakra-ui/core";
import Link from "next/link";
import { IoIosOptions } from "react-icons/io";
import { atom, useRecoilState } from "recoil";

const brandColorState = atom({
  key: "brandColor",
  default: "#3182ce",
});

const Navbar: FC = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarBgColor = { light: "white", dark: "gray.900" };
  const modalBgColor = { light: "gray.100", dark: "black" };
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            defaultValue={theme.colors["blue"][500]}
            title="Choose brand color"
            type="radio"
          >
            {["Blue", "Red", "Orange", "Yellow", "Green", "Teal"].map(
              (color: string, index: number) => {
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
              }
            )}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    );
  };

  return (
    <Box
      borderTopWidth={6}
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
              <Box>{siteEditorButtonNode()}</Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export { brandColorState };

export default Navbar;
