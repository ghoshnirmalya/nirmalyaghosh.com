import React from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  useColorMode,
  Icon,
} from "@chakra-ui/core";
import IArticle from "types/article";
import dynamic from "next/dynamic";

const SocialLinks = dynamic(import("components/social-links"));
const Navbar = dynamic(import("components/navbar"));
const Footer = dynamic(import("components/footer"));

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

    return (
      <>
        <SocialLinks />
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
                  <Box className="article">{children}</Box>
                </Stack>
              </Box>
            </Grid>
          </Box>
        </Box>
        <Footer />
      </>
    );
  };
};

export default Page;
