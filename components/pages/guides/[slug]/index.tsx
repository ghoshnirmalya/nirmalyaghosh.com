import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import TableOfContents from "components/table-of-contents";
import siteConfig from "config/site";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import IFrontMatter from "types/frontMatter";

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
  const publishedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">Published on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(frontMatter.date).format("LL")}
        </Text>
      </HStack>
    );
  };

  const updatedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(frontMatter.lastmod).format("LL")}.
        </Text>
      </HStack>
    );
  };

  const titleNode = () => {
    return (
      <Heading
        as="h1"
        size="2xl"
        lineHeight="base"
        bgClip="text"
        bgGradient="linear(to-l, #79c2ff, #d3ddff)"
      >
        {frontMatter.title}
      </Heading>
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
                  {publishedMetaNode()}
                  {titleNode()}
                </VStack>
                <Box className="article">{content}</Box>
                {updatedMetaNode()}
              </VStack>
            </Box>
            <VStack
              spacing={8}
              pos="sticky"
              top={8}
              h="100vh"
              overflow="scroll"
              display={["none", "none", "none", "block"]}
            >
              <TableOfContents source={source} />
              <SocialShare title={frontMatter.title} />
            </VStack>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
