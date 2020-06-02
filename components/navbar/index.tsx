import React, { FC } from "react";
import {
  Box,
  Stack,
  Link as _Link,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
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
  const modalBgColor = { light: "gray.100", dark: "gray.900" };
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

  const sideEditorButtonNode = () => {
    const [_, setBrandColor] = useRecoilState(brandColorState);

    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent rounded="md">
          <Stack
            isInline
            alignItems="center"
            bg={modalBgColor[colorMode]}
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
          >
            <ModalHeader>Choose brand color</ModalHeader>
            <ModalCloseButton top="auto" />
          </Stack>
          <ModalBody py={8}>
            <Stack isInline justifyContent="space-between">
              {["red", "orange", "yellow", "green", "teal", "blue"].map(
                (color: string, index: number) => {
                  return (
                    <Box
                      key={index}
                      as="button"
                      h={12}
                      w={12}
                      bg={`${color}.500`}
                      rounded="full"
                      shadow="xl"
                      borderWidth={2}
                      borderColor="gray.100"
                      onClick={() => setBrandColor(theme.colors[color][500])}
                    />
                  );
                }
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
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
              <Box>
                <IconButton
                  aria-label="Edit site"
                  size="sm"
                  icon={IoIosOptions}
                  onClick={onOpen}
                />
                {sideEditorButtonNode()}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export { brandColorState };

export default Navbar;
