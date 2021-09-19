import { Box, HStack, Link as _Link, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="sm">
        <Box
          d="flex"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <HStack spacing={2}>
            <Box>
              <_Link
                href="https://github.com/ghoshnirmalya/nirmalyaghosh.com"
                p={4}
              >
                Source code on Github
              </_Link>
            </Box>
            <Box>
              <Link href="/" passHref>
                <_Link href="/" target="_blank" p={4} aria-label="Logo">
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
                </_Link>
              </Link>
            </Box>
            <Box p={4}>
              <Text>
                Copyright &copy; {new Date().getFullYear()} Nirmalya Ghosh
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
