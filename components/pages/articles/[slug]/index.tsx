import {
  Badge,
  Box,
  Grid,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import siteConfig from "config/site";
import { Article } from "contentlayer/generated";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import DynamicComponentLoader from "./dynamic-component-loader";

dayjs.extend(localizedFormat);

interface IProps {
  article: Article;
  nextArticles: Article[];
}

const Callout = dynamic(
  () => import(/* webpackChunkName: "Callout" */ "components/mdx/callout")
);

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ "components/mdx/image")
);

const Jumbotron = dynamic(
  () => import(/* webpackChunkName: "Jumbotron" */ "components/mdx/jumbotron")
);

const Link = dynamic(
  () => import(/* webpackChunkName: "Link" */ "components/mdx/link")
);

const Placeholder = dynamic(
  () =>
    import(
      /* webpackChunkName: "Placeholder" */ "components/mdx/custom/placeholder"
    )
);

const NextJSSSG = dynamic(
  () =>
    import(
      /* webpackChunkName: "NextJSSSG" */ "components/mdx/custom/nextjs-ssg"
    ),
  {
    ssr: false,
    loading: () => <DynamicComponentLoader />,
  }
);

const NextJSSSR = dynamic(
  () =>
    import(
      /* webpackChunkName: "NextJSSSR" */ "components/mdx/custom/nextjs-ssr"
    ),
  {
    ssr: false,
    loading: () => <DynamicComponentLoader />,
  }
);

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
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
};

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

  const categoriesNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        {article.categories.map((category, index) => {
          return (
            <NextLink key={index} href={`/categories/${category}`} passHref>
              <ChakraLink fontSize="sm" _hover={{}} display="flex">
                <Badge variant="subtle" colorScheme="green">
                  {category}
                </Badge>
              </ChakraLink>
            </NextLink>
          );
        })}
      </HStack>
    );
  };

  const tagsNode = () => {
    return (
      <HStack
        spacing={2}
        isInline
        alignItems="center"
        maxW="2xl"
        mx="auto"
        px={[8, 8, 0, 0]}
        w="100%"
      >
        {article.tags.map((tag, index) => {
          return (
            <NextLink key={index} href={`/tags/${tag}`} passHref>
              <ChakraLink
                fontSize="sm"
                px={2}
                py={1}
                _hover={{
                  bg: "gray.900",
                }}
                rounded="sm"
              >
                # {tag}
              </ChakraLink>
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
    <>
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
      <Box as="main">
        <Grid templateColumns="1fr" gridGap={0}>
          <Box maxW="100%" overflowX="hidden">
            <VStack spacing={8} w="100%">
              <Box bgColor="gray.900" p={8} w="100%">
                <VStack spacing={2} align="left" maxW="2xl" mx="auto">
                  <HStack spacing={4}>
                    {publishedMetaNode()}
                    {categoriesNode()}
                  </HStack>
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
              {tagsNode()}
              {updatedMetaNode()}
              <Box py={12} maxW="2xl" mx="auto" px={[8, 8, 0, 0]} w="100%">
                {relatedArticlesNode()}
              </Box>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
