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

interface Article {
  id: number;
  title: string;
}

interface Props {
  articles: Article[];
}

const Articles: FC<Props> = ({ articles }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "gray.200", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "gray.200" };

  return (
    <Stack spacing={8}>
      <Box>
        <Link href="/articles">
          <Heading as="h2" size="xl">
            Articles
          </Heading>
        </Link>
      </Box>
      <Stack spacing={8}>
        {articles.map((article: Article) => {
          return (
            <Box key={article.id}>
              <Link href={`/articles/${article.id}`}>
                <a>
                  <PseudoBox
                    rounded="md"
                    bg={cardBgColor[colorMode]}
                    color={cardColor[colorMode]}
                  >
                    <Stack p={4} spacing={4}>
                      <Heading as="h4" size="md">
                        {article.title}
                      </Heading>
                      <Text>
                        Ut at ipsum porttitor, dignissim eros a, interdum nisl.
                        Duis egestas sed mauris nec interdum. Nunc at
                        pellentesque purus. Suspendisse felis ligula, auctor
                        gravida tempor non, vehicula ut massa.
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
    </Stack>
  );
};

export default Articles;
