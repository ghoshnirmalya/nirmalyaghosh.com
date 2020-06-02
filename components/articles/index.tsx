import React, { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Tag,
  Link as _Link,
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
  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/articles">
        <_Link p={2} href="/articles" rounded="md" color="brandColor">
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
        <Heading as="h2" size="lg">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const dateNode = (date: string) => {
    return (
      <Stack spacing={2} isInline alignItems="center">
        <Box as={IoMdClock} color="brandColor" />
        <Text fontSize="sm">{date}</Text>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h4" size="md" color="brandColor">
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
            <Tag key={index} size="sm" color="brandColor">
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
      <Button
        rightIcon="arrow-forward"
        bg="brandColor"
        color="white"
        _hover={{ bg: "brandColor", color: "white" }}
      >
        Read more
      </Button>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Stack spacing={16}>
        {articles.map((article: IArticle) => {
          return (
            <Box key={article.id}>
              <Link href="/articles/[id]" as={`/articles/${article.id}`}>
                <a>
                  <Box>
                    <Stack spacing={4}>
                      <Stack spacing={4}>
                        {dateNode(article.date)}
                        {titleNode(article.title)}
                        {tagsNode(article.tags)}
                        {descriptionNode()}
                      </Stack>
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
