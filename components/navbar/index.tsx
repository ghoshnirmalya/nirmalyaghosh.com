import { Box, HStack, Link as _Link } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/projects",
    title: "Stats",
  },
];

const Navbar: FC = () => {
  const menuNode = () => {
    return (
      <HStack isInline spacing={[0, 4]} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url} passHref>
                  <_Link
                    px={4}
                    py={2}
                    href={link.url}
                    rounded="sm"
                    fontSize={["sm", "md"]}
                    borderWidth={1}
                    borderColor="transparent"
                    _hover={{
                      textDecoration: "none",
                      bgColor: "gray.900",
                      borderWidth: 1,
                      borderColor: "gray.700",
                    }}
                    _focus={{ outline: "none" }}
                  >
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
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="green.500">
      <Box mx="auto" px={4} fontWeight="bold">
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box d="flex" alignItems="center">
            <Link href="/" passHref>
              <_Link
                href="/"
                d="flex"
                _focus={{ outline: "none" }}
                aria-label="Logo"
              >
                <svg
                  height={32}
                  width={32}
                  viewBox="0 0 250 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="85"
                    cy="85"
                    r="81"
                    fill="green"
                    stroke="black"
                    strokeWidth="15"
                  />
                  <path fill="green" />
                </svg>
              </_Link>
            </Link>
          </Box>
          {menuNode()}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
