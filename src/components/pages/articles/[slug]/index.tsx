"use client";

import {
  Box,
  Grid,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";

import Articles from "components/layouts/articles";
import Callout from "components/mdx/callout";
import Placeholder from "components/mdx/custom/placeholder";
import Image from "components/mdx/image";
import Jumbotron from "components/mdx/jumbotron";
import DynamicComponentLoader from "components/pages/articles/[slug]/dynamic-component-loader";

import { getNextArticles } from "lib/get-articles-data";

import { Article } from "contentlayer/generated";

dayjs.extend(localizedFormat);

const NextJSSSG = dynamic(
  () =>
    import(
      /* webpackChunkName: "NextJSSSG" */ "components/mdx/custom/nextjs-ssg"
    ),
  {
    ssr: false,
    loading: () => <DynamicComponentLoader />,
  },
);

const NextJSSSR = dynamic(
  () =>
    import(
      /* webpackChunkName: "NextJSSSR" */ "components/mdx/custom/nextjs-ssr"
    ),
  {
    ssr: false,
    loading: () => <DynamicComponentLoader />,
  },
);

const components = {
  Callout,
  img: Image,
  Jumbotron,
  Link,
  Image,
  Placeholder,
  NextJSSSG,
  NextJSSSR,
} as MDXComponents;

const Page = ({ article }: { article: Article }) => {
  const MDXContent = useMDXComponent(article.body.code);

  const nextArticles = getNextArticles(article.slug);

  const publishedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">Published on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(article.date).format("LL")}
        </Text>
      </HStack>
    );
  };

  const updatedMetaNode = () => {
    return (
      <HStack
        spacing={2}
        isInline
        alignItems="center"
        color="gray.400"
        maxW="2xl"
        mx="auto"
        px={[8, 8, 0, 0]}
        w="100%"
      >
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(article.lastmod).format("LL")}.
        </Text>
      </HStack>
    );
  };

  const titleNode = () => {
    return (
      <Heading
        as="h1"
        size="2xl"
        lineHeight="normal"
        bgClip="text"
        bgGradient="linear(to-l, #79c2ff, #d3ddff)"
      >
        {article.title}
      </Heading>
    );
  };

  const relatedArticlesNode = () => {
    return (
      <Articles
        articles={nextArticles.slice(0, 5)}
        heading="Related articles"
      />
    );
  };

  return (
    <Box as="main">
      <Grid templateColumns="1fr" gridGap={0}>
        <Box maxW="100%" overflowX="hidden">
          <VStack spacing={8} w="100%">
            <Box
              bgColor="gray.900"
              px={8}
              py={16}
              w="100%"
              bgGradient={["linear(to-br, gray.800, #181924)"]}
              borderColor="gray.700"
              borderBottomWidth={1}
            >
              <VStack spacing={2} align="left" maxW="2xl" mx="auto">
                <HStack spacing={4}>{publishedMetaNode()}</HStack>
                {titleNode()}
              </VStack>
            </Box>

            <Box
              className="article"
              maxW="2xl"
              mx="auto"
              px={[8, 8, 0, 0]}
              w="100%"
            >
              <MDXContent components={components} />
            </Box>

            {updatedMetaNode()}

            <Box
              py={12}
              w="100%"
              borderColor="gray.700"
              borderTopWidth={1}
              bgColor="gray.900"
            >
              <Box maxW="2xl" mx="auto" px={[8, 8, 0, 0]} w="100%">
                {relatedArticlesNode()}
              </Box>
            </Box>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
