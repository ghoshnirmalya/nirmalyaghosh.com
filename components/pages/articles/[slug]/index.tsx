import {
  Box,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
  Link,
  SlideFade,
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
import Article from "types/article";

dayjs.extend(localizedFormat);

interface IProps {
  content: any;
  frontMatter: IFrontMatter;
  source: string;
  nextArticles: Article[];
}

const SocialShare = dynamic(
  import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);
const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

const Page: NextPage<IProps> = ({
  content,
  frontMatter,
  source,
  nextArticles,
}) => {
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

  const categoriesNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {frontMatter.categories.map((category, index) => {
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

  const tagsNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {frontMatter.tags.map((tag, index) => {
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

  const relatedArticlesNode = () => {
    return (
      <Articles
        articles={nextArticles.slice(0, 5)}
        heading="Related articles"
      />
    );
  };

  return (
    <SlideFade in>
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
                    {publishedMetaNode()}
                    {categoriesNode()}
                  </HStack>
                  {titleNode()}
                </VStack>
                <Box className="article">{content}</Box>
                {tagsNode()}
                {updatedMetaNode()}
                <Box pt={12}>{relatedArticlesNode()}</Box>
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
    </SlideFade>
  );
};

export default Page;
