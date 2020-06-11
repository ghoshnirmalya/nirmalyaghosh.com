import React from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Tag,
  useColorMode,
  Icon,
} from "@chakra-ui/core";
import IArticle from "types/article";
import { IoMdClock, IoIosPricetag } from "react-icons/io";
import dynamic from "next/dynamic";

const SocialLinks = dynamic(import("components/social-links"));
const Navbar = dynamic(import("components/navbar"));

interface Props {
  article: IArticle;
}

const Page = (article: IArticle) => {
  return ({ children }) => {
    const { colorMode } = useColorMode();
    const sectionBgColor = { light: "gray.100", dark: "black" };
    const sectionColor = { light: "black", dark: "gray.100" };

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
        <Heading as="h1" size="xl">
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

    return (
      <>
        <Navbar />
        <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
          <Box maxW="3xl" mx="auto" px={4} py={8}>
            <Grid templateColumns="1fr">
              <Box maxW="100%" overflowX="hidden">
                <Stack spacing={8}>
                  {metaNode(
                    article.date,
                    article.readingTime.text,
                    article.wordCount
                  )}
                  {titleNode(article.title)}
                  {tagsNode(article.tags)}
                  <Box className="article">{children}</Box>
                </Stack>
              </Box>
            </Grid>
          </Box>
        </Box>
      </>
    );
  };
};

export default Page;
