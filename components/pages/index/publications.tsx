import { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  PseudoBox,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";

const Publications: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.200", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "gray.200" };

  return (
    <Stack spacing={8} py={8}>
      <Box>
        <Link href="/publications">
          <Heading as="h2" size="xl">
            Publications
          </Heading>
        </Link>
      </Box>
      {[...Array(5)].map((_, index: number) => {
        return (
          <Box key={index}>
            <Link href={`/posts/${index}`}>
              <a>
                <PseudoBox
                  rounded="md"
                  bg={cardBgColor[colorMode]}
                  color={cardColor[colorMode]}
                >
                  <Stack p={4} spacing={4}>
                    <Heading as="h4" size="md">
                      In gravida a est molestie tincidunt.
                    </Heading>
                    <Text>
                      Aenean semper scelerisque mi, vitae pretium nisl pharetra
                      ac. Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Morbi non dui nec lacus maximus auctor. Nullam
                      tempor accumsan tortor, vitae vestibulum nisi rhoncus
                      condimentum. Nullam pretium rhoncus ligula ut congue.
                    </Text>
                    <Box>
                      <Button>Read more</Button>
                    </Box>
                  </Stack>
                </PseudoBox>
              </a>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Publications;
