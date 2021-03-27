import {
  Box,
  Button,
  HStack,
  Link as _Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
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
    url: "/guides",
    title: "Guides",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Navbar: FC = () => {
  const mobileMenuNode = () => {
    return (
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList placement="bottom-end" bg="gray.900" color="white">
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
        </MenuList>
      </Menu>
    );
  };

  const desktopMenuNode = () => {
    return (
      <HStack isInline spacing={4} alignItems="center">
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
      </HStack>
    );
  };

  return (
    <Box
      as="header"
      zIndex={1}
      bg="gray.900"
      color="white"
      shadow="md"
      fontWeight="bold"
      px={4}
      borderTopWidth={5}
      borderColor="blue.400"
    >
      <Box maxW="6xl" mx="auto">
        <HStack justifyContent="space-between" alignItems="center" py={4}>
          <Box d="flex" alignItems="center">
            <Link href="/">
              <_Link href="/" d="flex">
                <Image
                  src="/images/common/favicon.svg"
                  alt="Logo"
                  height={32}
                  width={32}
                  quality={100}
                  priority
                />
              </_Link>
            </Link>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            {desktopMenuNode()}
          </Box>
          <Box display={["block", "block", "block", "none"]} px={4}>
            {mobileMenuNode()}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
