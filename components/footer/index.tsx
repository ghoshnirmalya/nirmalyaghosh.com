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

const SocialLinks: FC = () => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "gray.100", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "gray.100" };

  return (
    <Box
      bg={sectionBgColor[colorMode]}
      color={sectionColor[colorMode]}
      p={4}
      as="footer"
    >
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" textAlign="center" justifyContent="center">
          <Stack spacing={2}>
            <Box>
              <Link href="/">
                <_Link href="/" target="_blank">
                  <Image
                    src="/images/common/favicon.png"
                    alt="Logo"
                    size={8}
                    mx="auto"
                  />
                </_Link>
              </Link>
            </Box>
            <Box>
              <_Link href="https://github.com/ghoshnirmalya/nirmalyaghosh.com">
                Source code on Github
              </_Link>
            </Box>
            <Box>
              <Text>
                Copyright &copy; {new Date().getFullYear()} Nirmalya Ghosh
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
