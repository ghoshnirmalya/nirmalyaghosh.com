"use client";

import { Box, BoxProps, HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const MotionBox = motion<BoxProps>(Box);

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
];

const Navbar: FC = () => {
  const pathname = usePathname();

  const menuNode = () => {
    const socialLinksNode = () => {
      return (
        <Box display="flex" alignItems="center" fontSize="sm">
          <HStack spacing={4}>
            <Link
              px={4}
              py={2}
              href="https://github.com/ghoshnirmalya"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
                borderColor: "gray.700",
              }}
              _focus={{ outline: "none" }}
              isExternal
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link
              px={4}
              py={2}
              href="https://www.linkedin.com/in/ghoshnirmalya/"
              rounded="sm"
              fontSize="sm"
              borderWidth={1}
              borderColor="transparent"
              _hover={{
                textDecoration: "none",
                bgColor: "gray.900",
                borderColor: "gray.700",
              }}
              _focus={{ outline: "none" }}
              isExternal
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </HStack>
        </Box>
      );
    };

    return (
      <HStack
        isInline
        spacing={[0, 4]}
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        color="blue.100"
      >
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link
                  as={NextLink}
                  px={4}
                  py={2}
                  href={link.url}
                  rounded="sm"
                  fontSize="xs"
                  borderWidth={1}
                  borderColor="transparent"
                  _hover={{
                    textDecoration: "none",
                    bgColor: "gray.900",
                    borderColor: "gray.700",
                  }}
                  _focus={{ outline: "none" }}
                >
                  {link.title}
                </Link>
              </Box>
            );
          }),
        ]}
        {socialLinksNode()}
      </HStack>
    );
  };

  return (
    <MotionBox
      as="header"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: pathname === "/" ? 1 : 0,
          },
        },
      }}
      zIndex={1}
      borderTopWidth={5}
      borderColor="blue.400"
    >
      <Box mx="auto" px={[4, 4, 4, 0]} maxW="6xl">
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box display="flex" alignItems="center">
            <Link
              href="/"
              display="flex"
              _focus={{ outline: "none" }}
              aria-label="Logo"
              as={NextLink}
              _hover={{
                textDecoration: "none",
              }}
            >
              <svg
                height={32}
                width={32}
                viewBox="0 0 250 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="125"
                  cy="125"
                  r="121"
                  fill="white"
                  stroke="black"
                  strokeWidth="8"
                />
                <path
                  d="M106.503 84.8457L107.303 95.9541C114.175 87.3636 123.388 83.0684 134.94 83.0684C145.131 83.0684 152.714 86.0602 157.69 92.0439C162.667 98.0277 165.215 106.974 165.333 118.882V181H139.65V119.504C139.65 114.053 138.465 110.114 136.096 107.685C133.726 105.196 129.786 103.952 124.276 103.952C117.049 103.952 111.628 107.033 108.014 113.194V181H82.3311V84.8457H106.503Z"
                  fill="black"
                />
              </svg>
            </Link>
          </Box>
          {menuNode()}
        </HStack>
      </Box>
      <Box w="full" h="1px" bg="gray.700" />
    </MotionBox>
  );
};

export default Navbar;
