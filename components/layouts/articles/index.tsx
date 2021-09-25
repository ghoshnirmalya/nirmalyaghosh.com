import {
  Box,
  Heading,
  Input,
  Link as _Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import { FC, FormEvent, useState } from "react";
import IArticle from "types/article";
import IPublication from "types/publication";

dayjs.extend(localizedFormat);

interface Props {
  articles: (IArticle & IPublication)[];
  hideViewAllLinksNode?: boolean;
}

const Articles: FC<Props> = ({
  articles = [],
  hideViewAllLinksNode = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedArticles = articles
    .sort(
      (a: IArticle & IPublication, b: IArticle & IPublication) =>
        Number(new Date(b.data?.date)) - Number(new Date(a.data?.date))
    )
    .filter((article: IArticle) =>
      article.data?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/articles" passHref>
        <_Link p={2} href="/articles" rounded="sm">
          <Box color="gray.300">View all articles</Box>
        </_Link>
      </Link>
    );
  };

  const searchNode = () => {
    if (!hideViewAllLinksNode) return false;

    return (
      <Box>
        <Input
          bg="gray.800"
          color="white"
          border="none"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an article"
        />
      </Box>
    );
  };

  const headingNode = () => {
    if (hideViewAllLinksNode) {
      return (
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Articles
            </Heading>
            <Text>Posts related to some of the latest technologies</Text>
          </VStack>
        </Box>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl" color="gray.300">
          Articles
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const metaNode = (date: string) => {
    return (
      <Box>
        <Text fontSize="sm" color="gray.400">
          {dayjs(date).format("LL")}
        </Text>
      </Box>
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

    return sortedArticles.map((article: IArticle & IPublication) => {
      if (!article.data.slug) {
        return (
          <Box key={article.data.slug}>
            <a
              href={`/articles/${article.data.slug}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Box>
                <VStack spacing={1} align="left">
                  {metaNode(article.data.date)}
                  {titleNode(article.data.title)}
                  {descriptionNode(article.data.description)}
                </VStack>
              </Box>
            </a>
          </Box>
        );
      }

      return (
        <Box key={article.data.slug}>
          <Link href={`/articles/${article.data.slug}`}>
            <a>
              <Box>
                <VStack spacing={1} align="left">
                  {metaNode(article.data.date)}
                  {titleNode(article.data.title)}
                  {descriptionNode(article.data.description)}
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
      {searchNode()}
      {articlesNode()}
    </VStack>
  );
};

export default Articles;
