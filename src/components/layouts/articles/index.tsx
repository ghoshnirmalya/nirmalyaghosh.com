"use client";

import {
  Box,
  HStack,
  Heading,
  Input,
  Link,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Fuse from "fuse.js";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import Publication from "types/publication";

import { Article } from "contentlayer/generated";

dayjs.extend(localizedFormat);

interface IProps {
  articles: (Article & Publication)[] | Article[];
  currentTag?: string;
  currentCategory?: string;
  heading?: string;
  headingLevel?: "h1" | "h2";
  hideSearch?: boolean;
}

const Articles = ({
  articles = [],
  currentTag,
  currentCategory,
  heading,
  headingLevel = "h1",
  hideSearch = false,
}: IProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(articles);

  const fuse = new Fuse(articles, {
    keys: ["title"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(articles);

      return;
    }

    const results = fuse.search(searchQuery);
    const filteredResults = results.map((result) => result.item);

    setSearchResults(filteredResults);
  }, [searchQuery]);

  const sortedArticles = searchResults.sort(
    (a: Article & Publication, b: Article & Publication) =>
      Number(new Date(b.date)) - Number(new Date(a.date)),
  );

  const headingNode = () => {
    if (!!currentTag) {
      return (
        <VStack spacing={2} align="left">
          <Heading as={headingLevel} size="md" color="blue.100">
            Articles
          </Heading>
          <Text>Posts tagged with &quot;{currentTag}&quot;</Text>
        </VStack>
      );
    }

    if (!!currentCategory) {
      return (
        <VStack spacing={2} align="left">
          <Heading as={headingLevel} size="md" color="blue.100">
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
        <Heading as={headingLevel} size="md">
          {heading}
        </Heading>
      );
    }

    return (
      <VStack spacing={2} align="left">
        <Heading as={headingLevel} size="md" color="blue.100">
          Articles
        </Heading>
        <Text color="blue.100" fontSize="sm">
          Posts related to some of the latest technologies
        </Text>
      </VStack>
    );
  };

  const metaNode = (date: string, type: "publication" | "article") => {
    return (
      <HStack spacing={4} alignItems="center">
        <Text fontSize="sm" color="gray.500">
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
      <Heading as="h2" size="sm" lineHeight="tall" color="blue.400">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return (
      <Text color="blue.100" fontSize="sm">
        {description}
      </Text>
    );
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
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <VStack spacing={0} align="left">
              {metaNode(article.date, "publication")}
              {titleNode(article.title)}
              {descriptionNode(article.description)}
            </VStack>
          </a>
        );
      }

      return (
        <Box key={index}>
          <Link
            as={NextLink}
            href={`/articles/${article.slug}`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Box>
              <VStack spacing={1} align="left">
                {metaNode(article.date, "article")}
                {titleNode(article.title)}
                {descriptionNode(article.description)}
              </VStack>
            </Box>
          </Link>
        </Box>
      );
    });
  };

  const searchBarNode = () => {
    if (hideSearch) {
      return null;
    }

    return (
      <Input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        borderColor="gray.700"
        fontSize="sm"
      />
    );
  };

  return (
    <VStack spacing={12} align="left">
      <VStack spacing={4} align="left">
        {headingNode()}
        {searchBarNode()}
      </VStack>
      {articlesNode()}
    </VStack>
  );
};

export default Articles;
