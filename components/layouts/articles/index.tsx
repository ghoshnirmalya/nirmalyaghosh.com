import { Article } from "contentlayer/generated";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Link as _Link,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import { FC, useState } from "react";
import Publication from "types/publication";
import { IoIosLink } from "react-icons/io";

dayjs.extend(localizedFormat);

interface Props {
  articles: (Article & Publication)[] | Article[];
  hideViewAllLinksNode?: boolean;
  currentTag?: string;
  currentCategory?: string;
  heading?: string;
}

const Articles: FC<Props> = ({
  articles = [],
  hideViewAllLinksNode = false,
  currentTag,
  currentCategory,
  heading,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedArticles = articles
    .sort(
      (a: Article & Publication, b: Article & Publication) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((article: Article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/articles" passHref>
        <_Link
          p={2}
          href="/articles"
          rounded="sm"
          fontSize="sm"
          borderWidth={1}
          borderColor="transparent"
          _hover={{
            textDecoration: "none",
            borderWidth: 1,
            borderColor: "gray.700",
            bg: "gray.900",
          }}
        >
          <Box color="gray.300">View all articles</Box>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    if (!!currentTag) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="lg" color="white">
            Articles
          </Heading>
          <Text>Posts tagged with &quot;{currentTag}&quot;</Text>
        </VStack>
      );
    }

    if (!!currentCategory) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="lg" color="white">
            Articles
          </Heading>
          <Text>
            Posts which belong to the &quot;{currentCategory}&quot; category
          </Text>
        </VStack>
      );
    }

    if (!!heading) {
      return (
        <Heading as="h2" size="lg">
          {heading}
        </Heading>
      );
    }

    if (hideViewAllLinksNode) {
      return (
        <VStack spacing={2} align="left">
          <Heading as="h1" size="lg" color="white">
            Articles
          </Heading>
          <Text>Posts related to some of the latest technologies</Text>
        </VStack>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="lg" color="white">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string, type: "publication" | "article") => {
    return (
      <HStack spacing={4} alignItems="center">
        <Text fontSize="sm" color="gray.400">
          {dayjs(date).format("LL")}
        </Text>
        {type === "publication" && (
          <>
            <Box>•</Box>
            <Tag
              size="sm"
              colorScheme="blue"
              borderRadius="full"
              variant="subtle"
            >
              <TagLabel>Publication</TagLabel>
            </Tag>
          </>
        )}
      </HStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const articlesNode = () => {
    if (!sortedArticles.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No articles found!</Text>
        </VStack>
      );
    }

    return sortedArticles.map((article: Article & Publication, index) => {
      if (!article.slug) {
        return (
          <Box key={index}>
            <a
              href={article.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Box>
                <VStack spacing={1} align="left">
                  {metaNode(article.date, "publication")}
                  {titleNode(article.title)}
                  {descriptionNode(article.description)}
                </VStack>
              </Box>
            </a>
          </Box>
        );
      }

      return (
        <Box key={index}>
          <Link href={`/articles/${article.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {metaNode(article.date, "article")}
                  {titleNode(article.title)}
                  {descriptionNode(article.description)}
                </VStack>
              </Box>
            </a>
          </Link>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {articlesNode()}
    </VStack>
  );
};

export default Articles;
