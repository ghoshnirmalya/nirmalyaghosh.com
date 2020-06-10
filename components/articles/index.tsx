import React, { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Tag,
  Link as _Link,
  useColorMode,
} from "@chakra-ui/core";
import Link from "next/link";
import IArticle from "types/article";
import {
  IoMdClock,
  IoMdArrowRoundForward,
  IoIosPricetag,
} from "react-icons/io";

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
    if (hideViewAllLinksNode) return false;

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
    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const dateNode = (date: string) => {
    return (
      <Stack spacing={2} isInline alignItems="center">
        <Box as={IoMdClock} />
        <Text fontSize="sm">{date}</Text>
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

  const tagsNode = (tags: string[] = []) => {
    if (!tags.length) return false;

    return (
      <Stack isInline spacing={2}>
        {tags.map((tag, index) => {
          return (
            <Tag key={index} size="sm">
              <Stack spacing={2} isInline alignItems="center">
                <Box as={IoIosPricetag} size="15px" />
                <Box>{tag}</Box>
              </Stack>
            </Tag>
          );
        })}
      </Stack>
    );
  };

  const descriptionNode = () => {
    return (
      <Text>
        Ut at ipsum porttitor, dignissim eros a, interdum nisl. Duis egestas sed
        mauris nec interdum. Nunc at pellentesque purus. Suspendisse felis
        ligula, auctor gravida tempor non, vehicula ut massa.
      </Text>
    );
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
                      {dateNode(article.date)}
                      {titleNode(article.title)}
                      {tagsNode(article.tags)}
                      {descriptionNode()}
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
