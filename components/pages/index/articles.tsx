import { FC } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  PseudoBox,
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
}

const Articles: FC<Props> = ({ articles = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "black" };
  const cardColor = { light: "black", dark: "white" };

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
            <Tag key={index} size="sm" bg="brandColor" color="white">
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
      <Stack spacing={2} isInline alignItems="center" color="brandColor">
        <Box fontWeight="bold">Read more</Box>
        <Box as={IoMdArrowRoundForward} size="15px" />
      </Stack>
    );
  };

  return (
    <Stack spacing={8}>
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Articles
        </Heading>
        <Link href="/articles">
          <_Link p={2} href="/articles" rounded="md" color="brandColor">
            <Stack spacing={2} isInline alignItems="center">
              <Box fontWeight="bold">View all articles</Box>
              <Box as={IoMdArrowRoundForward} size="15px" />
            </Stack>
          </_Link>
        </Link>
      </Box>
      <Stack spacing={8}>
        {articles.slice(0, 3).map((article: IArticle) => {
          return (
            <Box key={article.id}>
              <Link href="/articles/[id]" as={`/articles/${article.id}`}>
                <a>
                  <PseudoBox
                    rounded="md"
                    bg={cardBgColor[colorMode]}
                    color={cardColor[colorMode]}
                  >
                    <Stack isInline p={4} spacing={4}>
                      <Stack>
                        <Stack
                          spacing={4}
                          justifyContent="space-between"
                          h="full"
                        >
                          <Stack spacing={4}>
                            <Stack
                              spacing={8}
                              isInline
                              justifyContent="space-between"
                            >
                              {dateNode(article.date)}
                              {tagsNode(article.tags)}
                            </Stack>
                            {titleNode(article.title)}
                            {descriptionNode()}
                          </Stack>
                          <Box>{ctaNode()}</Box>
                        </Stack>
                      </Stack>
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
