import React, { FC } from "react";
import {
  Stack,
  Button,
  Image,
  Box,
  Link as _Link,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoLogoDribbble } from "react-icons/io";

const SocialLinks: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.900", dark: "gray.100" };
  const cardColor = { light: "gray.100", dark: "gray.900" };

  return (
    <Box
      bg={cardBgColor[colorMode]}
      color={cardColor[colorMode]}
      p={4}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Box maxW="6xl" mx="auto" d="flex" justifyContent="space-between">
        <Box d="flex" alignItems="center">
          <Link href="/">
            <_Link p={2} href="/" rounded="md">
              <Image src="/images/common/favicon.png" alt="Logo" size={8} />
            </_Link>
          </Link>
        </Box>
        <Box d="flex" alignItems="center">
          <Stack spacing={4} isInline>
            <Button
              leftIcon={IoLogoGithub}
              bg="#333"
              color="#fff"
              textAlign="left"
              _hover={{
                color: "#fff",
              }}
            >
              Github
            </Button>
            <Button
              leftIcon={IoLogoLinkedin}
              bg="#0e76a8"
              color="#fff"
              textAlign="left"
              _hover={{
                color: "#fff",
              }}
            >
              LinkedIn
            </Button>
            <Button
              leftIcon={IoLogoDribbble}
              bg="#ea4c89"
              color="#fff"
              textAlign="left"
              _hover={{
                color: "#fff",
              }}
            >
              Dribbble
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
