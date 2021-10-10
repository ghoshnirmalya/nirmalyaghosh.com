import {
  Box,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import TableOfContents from "components/table-of-contents";
import siteConfig from "config/site";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import IFrontMatter from "types/frontMatter";
import NextLink from "next/link";

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

  const categoriesNode = (categories: string[]) => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {categories.map((category, index) => {
          return (
            <NextLink key={index} href={`/categories/${category}`}>
              <Link fontSize="sm" _hover={{}}>
                {category}
              </Link>
            </NextLink>
          );
        })}
      </HStack>
    );
  };

  const tagsNode = (tags: string[]) => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {tags.map((tag, index) => {
          return (
            <NextLink key={index} href={`/tags/${tag}`}>
              <Link fontSize="sm" px={4} py={2} bg="gray.800" _hover={{}}>
                # {tag}
              </Link>
            </NextLink>
          );
        })}
      </HStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading
        as="h1"
        size="2xl"
        lineHeight="base"
        bgClip="text"
        bgGradient="linear(to-l, #79c2ff, #d3ddff)"
      >
        {title}
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
              url: `https://cover-images.vercel.app/api?postTitle=${frontMatter.title}&postDescription=${frontMatter.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.details.url}${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
              width: 1200,
              height: 675,
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
                  <HStack justifyContent="space-between">
                    {publishedMetaNode(frontMatter.date)}
                    {categoriesNode(frontMatter.categories)}
                  </HStack>
                  {titleNode(frontMatter.title)}
                </VStack>
                <Box className="article">{content}</Box>
                {tagsNode(frontMatter.tags)}
                {updatedMetaNode(frontMatter.lastmod)}
                <Box>
                  <SocialShare title={frontMatter.title} />
                </Box>
              </VStack>
            </Box>
            <TableOfContents source={source} />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
