import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import siteConfig from "config/site";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import IFrontMatter from "types/frontMatter";
import GithubSlugger from "github-slugger";
import { useEffect, useState } from "react";

dayjs.extend(localizedFormat);

interface IProps {
  content: any;
  frontMatter: IFrontMatter;
  source: string;
}

const SocialShare = dynamic(
  import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);

const Page: NextPage<IProps> = ({ content, frontMatter, source }) => {
  const publishedMetaNode = (date: string) => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">Published on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(date).format("LL")}
        </Text>
      </HStack>
    );
  };

  const updatedMetaNode = (date: string) => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(date).format("LL")}.
        </Text>
      </HStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading
        as="h1"
        size="2xl"
        lineHeight="tall"
        bgClip="text"
        bgGradient="linear(to-l, #79c2ff, #d3ddff)"
      >
        {title}
      </Heading>
    );
  };

  const tocNode = () => {
    const headingLines = source
      .split("\n")
      .filter((line) => line.match(/^###*\s/));

    const headings = headingLines.map((raw) => {
      const text = raw.replace(/^###*\s/, "");
      const level = raw.slice(0, 3) === "###" ? 3 : 2;
      const slugger = new GithubSlugger();

      return {
        text,
        level,
        href: slugger.slug(text),
      };
    });

    return (
      <Box
        pos="sticky"
        top={8}
        h="100vh"
        overflow="scroll"
        display={["none", "none", "none", "block"]}
      >
        <VStack alignItems="left">
          <Heading size="sm">Table of contents</Heading>
          <VStack spacing={2} alignItems="left">
            {headings.map((heading, index) => {
              return (
                <a href={`#${heading.href}`} key={index}>
                  <Text
                    color="gray.400"
                    _hover={{
                      color: "blue.400",
                    }}
                  >
                    {heading.text}
                  </Text>
                </a>
              );
            })}
          </VStack>
        </VStack>
      </Box>
    );
  };

  return (
    <>
      <NextSeo
        title={`${frontMatter.title}`}
        description={frontMatter.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: `${frontMatter.title}`,
          description: frontMatter.description,
          images: [
            {
              url: frontMatter.coverImage
                ? frontMatter.coverImage
                : `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: frontMatter.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Box>
        <Box maxW={["2xl", "2xl", "2xl", "6xl"]} mx="auto" py={8} px={4}>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]}
            gridGap={[0, 0, 0, 24]}
          >
            <Box maxW="100%" overflowX="hidden">
              <VStack spacing={8} align="left">
                <VStack spacing={2} align="left">
                  {publishedMetaNode(frontMatter.date)}
                  {titleNode(frontMatter.title)}
                </VStack>
                <Box className="article">{content}</Box>
                {updatedMetaNode(frontMatter.lastmod)}
                <Box>
                  <SocialShare title={frontMatter.title} />
                </Box>
              </VStack>
            </Box>
            {tocNode()}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
