import { Article } from ".contentlayer/types";
import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import TableOfContents from "components/table-of-contents";
import siteConfig from "config/site";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

dayjs.extend(localizedFormat);

const components = { Callout, img: Image };

interface IProps {
  article: Article;
  nextArticles: Article[];
}

const SocialShare = dynamic(
  () => import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);
const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

const Page: NextPage<IProps> = ({ article, nextArticles }) => {
  const MDXContent = useMDXComponent(article.body.code);

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
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(article.lastmod).format("LL")}.
        </Text>
      </HStack>
    );
  };

  const categoriesNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {article.categories.map((category, index) => {
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
        {article.tags.map((tag, index) => {
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
    <SlideFade in>
      <NextSeo
        title={`${article.title}`}
        description={article.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: `${article.title}`,
          description: article.description,
          images: [
            {
              url: `https://cover-images.vercel.app/api?postTitle=${article.title}&postDescription=${article.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.details.url}${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
              width: 1200,
              height: 675,
              alt: article.title,
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
                <Box className="article">
                  <MDXContent components={components} />
                </Box>
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
              overflow="auto"
              display={["none", "none", "none", "block"]}
            >
              <TableOfContents source={article.body.raw} />
              <SocialShare title={article.title} />
            </VStack>
          </Grid>
        </Box>
      </Box>
    </SlideFade>
  );
};

export default Page;
