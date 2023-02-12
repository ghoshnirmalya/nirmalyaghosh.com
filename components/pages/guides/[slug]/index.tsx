import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Guide } from "contentlayer/generated";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import dynamic from "next/dynamic";

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Jumbotron = dynamic(
  () => import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  () => import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

dayjs.extend(localizedFormat);

const components = { Callout, Jumbotron, Link, Image };

interface IProps {
  guide: Guide;
}

const Page: NextPage<IProps> = ({ guide }) => {
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
