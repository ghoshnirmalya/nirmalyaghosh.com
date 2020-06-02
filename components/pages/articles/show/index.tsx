import React, { FC } from "react";
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Tag,
  useColorMode,
} from "@chakra-ui/core";
import SocialLinks from "components/social-links";
import IArticle from "types/article";
import { IoMdClock, IoIosPricetag } from "react-icons/io";

interface Props {
  article: IArticle;
}

const Page: FC<Props> = ({ article }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "white", dark: "gray.900" };
  const sectionColor = { light: "gray.900", dark: "white" };

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
      <Heading as="h1" size="xl" color="brandColor">
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

  const descriptionNode = (description: string) => {
    return <Box dangerouslySetInnerHTML={{ __html: description }} />;
  };

  return (
    <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
      <Box maxW="6xl" mx="auto" px={4} py={8}>
        <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
          <Box maxW="100%" overflowX="hidden">
            <Stack spacing={8}>
              {dateNode(article.date)}
              {titleNode(article.title)}
              {tagsNode(article.tags)}
              {descriptionNode(article.contentHtml)}
            </Stack>
          </Box>
          <Box order={[1, 1, 1, 2]}>
            <Box position="sticky" top={100}>
              <SocialLinks />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Page;
