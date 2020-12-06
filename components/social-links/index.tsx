import React, { FC } from "react";
import {
  Stack,
  Image,
  Box,
  Link as _Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const SocialLinks: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.900", dark: "gray.100" };
  const cardColor = { light: "gray.100", dark: "gray.900" };

  return (
    <Box bg={cardBgColor[colorMode]} color={cardColor[colorMode]} zIndex={1}>
      <Box maxW="6xl" mx="auto" d="flex" justifyContent="space-between" p={4}>
        <Box d="flex" alignItems="center">
          <Link href="/">
            <_Link href="/" rounded="md">
              <Image src="/images/common/favicon.png" alt="Logo" size={8} />
            </_Link>
          </Link>
        </Box>
        <Box d="flex" alignItems="center">
          <Stack spacing={4} isInline>
            <_Link
              py={2}
              px={4}
              href="https://github.com/ghoshnirmalya"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </Stack>
            </_Link>
            <_Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/ghoshnirmalya/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </Stack>
            </_Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
