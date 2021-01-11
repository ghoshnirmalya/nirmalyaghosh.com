import { Box, Image, Link as _Link, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box d="flex" textAlign="center" justifyContent="center">
          <VStack spacing={2}>
            <Box>
              <Link href="/">
                <_Link href="/" target="_blank">
                  <Image
                    src="/images/common/favicon.svg"
                    alt="Logo"
                    boxSize={8}
                    mx="auto"
                  />
                </_Link>
              </Link>
            </Box>
            <Box p={4}>
              <_Link
                href="https://github.com/ghoshnirmalya/nirmalyaghosh.com"
                p={4}
              >
                Source code on Github
              </_Link>
            </Box>
            <Box>
              <Text>
                Copyright &copy; {new Date().getFullYear()} Nirmalya Ghosh
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
