import { FC } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

const Publications: FC = () => {
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
                <Stack spacing={4}>
                  <Heading as="h4" size="lg">
                    In gravida a est molestie tincidunt.
                  </Heading>
                  <Text>
                    Aenean semper scelerisque mi, vitae pretium nisl pharetra
                    ac. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Morbi non dui nec lacus maximus auctor. Nullam
                    tempor accumsan tortor, vitae vestibulum nisi rhoncus
                    condimentum. Nullam pretium rhoncus ligula ut congue.
                  </Text>
                </Stack>
              </a>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Publications;
