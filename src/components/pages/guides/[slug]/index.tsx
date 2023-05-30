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

import Callout from "components/mdx/callout";
import Image from "components/mdx/image";
import Jumbotron from "components/mdx/jumbotron";

import { Guide } from "contentlayer/generated";

dayjs.extend(localizedFormat);

const components = { Callout, Jumbotron, Link, Image } as MDXComponents;

const Page = ({ guide }: { guide: Guide }) => {
  const MDXContent = useMDXComponent(guide.body.code);

  const publishedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">Published on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(guide.date).format("LL")}
        </Text>
      </HStack>
    );
  };

  const updatedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center" color="gray.400">
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(guide.lastmod).format("LL")}.
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
        {guide.title}
      </Heading>
    );
  };

  return (
    <Box as="main">
      <Grid templateColumns="1fr" gridGap={0}>
        <Box maxW="100%" overflowX="hidden">
          <VStack spacing={8} w="100%">
            <Box
              bgColor="gray.900"
              p={8}
              w="100%"
              bgGradient={["linear(to-br, gray.800, #181924)"]}
            >
              <VStack spacing={2} align="left" maxW="2xl" mx="auto">
                {publishedMetaNode()}
                {titleNode()}
              </VStack>
            </Box>
            <Box className="article" maxW="2xl" mx="auto" px={[8, 0, 0]}>
              <MDXContent components={components} />
            </Box>
            {updatedMetaNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
