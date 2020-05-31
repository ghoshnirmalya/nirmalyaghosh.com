import { FC } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/core";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
}

interface Props {
  articles: Article[];
}

const Articles: FC<Props> = ({ articles }) => {
  return (
    <Stack spacing={8}>
      <Box>
        <Link href="/articles">
          <Heading as="h2" size="xl">
            Articles
          </Heading>
        </Link>
      </Box>
      {articles.map((article: Article) => {
        return (
          <Box key={article.id}>
            <Link href={`/articles/${article.id}`}>
              <a>
                <Stack spacing={4}>
                  <Heading as="h4" size="lg">
                    {article.title}
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
