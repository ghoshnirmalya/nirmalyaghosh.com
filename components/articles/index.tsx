import React, { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link as _Link,
  Image,
  Icon,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import IArticle from "types/article";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Props {
  articles: IArticle[];
  hideViewAllLinksNode?: boolean;
}

const Articles: FC<Props> = ({
  articles = [],
  hideViewAllLinksNode = false,
}) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };

  const viewAllLinksNode = () => {
    return (
      <Link href="/articles">
        <_Link p={2} href="/articles" rounded="md">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all articles</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    if (hideViewAllLinksNode) {
      return (
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Image
              objectFit="cover"
              src="/images/common/articles.svg"
              alt="Articles"
              size={20}
              bg={cardColor[colorMode]}
              color={cardBgColor[colorMode]}
              rounded="full"
              p={2}
            />
          </Box>
          <Box>
            <Stack spacing={2}>
              <Heading as="h2" size="xl">
                Articles
              </Heading>
              <Text>Posts related to some of the latest technologies</Text>
            </Stack>
          </Box>
        </Stack>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string, readingTime: string, wordCount: string) => {
    return (
      <Stack spacing={4} isInline alignItems="center">
        <Box>
          <Text fontSize="xs">{date}</Text>
        </Box>
        <Icon name="minus" size="12px" />
        <Box>
          <Text fontSize="xs">{readingTime}</Text>
        </Box>
        <Icon name="minus" size="12px" />
        <Box>
          <Text fontSize="xs">{wordCount} words</Text>
        </Box>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon="arrow-forward" variant="link" fontSize="sm">
        Read more
      </Button>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Stack spacing={8}>
        {articles.map((article: IArticle) => {
          const permalink = article.__resourcePath.replace(".mdx", "");

          return (
            <Box key={permalink}>
              <Link href={`/${permalink}`}>
                <a>
                  <Box
                    bg={cardBgColor[colorMode]}
                    color={cardColor[colorMode]}
                    p={8}
                    rounded="md"
                    shadow="md"
                  >
                    <Stack spacing={4}>
                      {metaNode(
                        article.date,
                        article.readingTime.text,
                        article.wordCount
                      )}
                      {titleNode(article.title)}
                      {descriptionNode(article.description)}
                      <Box>{ctaNode()}</Box>
                    </Stack>
                  </Box>
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
