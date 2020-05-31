import { FC } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

const Articles: FC = () => {
  return (
    <Stack spacing={8} py={8}>
      <Box>
        <Link href="/articles">
          <Heading as="h2" size="xl">
            Articles
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Heading>
                  <Text>
                    Ut at ipsum porttitor, dignissim eros a, interdum nisl. Duis
                    egestas sed mauris nec interdum. Nunc at pellentesque purus.
                    Suspendisse felis ligula, auctor gravida tempor non,
                    vehicula ut massa.
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

export default Articles;
