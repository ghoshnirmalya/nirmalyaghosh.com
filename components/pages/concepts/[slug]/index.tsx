import { Concept } from "contentlayer/generated";
import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import siteConfig from "config/site";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import DynamicComponentLoader from "./dynamic-component-loader";
import Sidebar from "./sidebar";

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

const SocialShare = dynamic(
  () => import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);

dayjs.extend(localizedFormat);

const components = {
  Callout,
  Jumbotron,
  Link,
  Image,
  SocialShare,
  Placeholder,
  NextJSSSG,
  NextJSSSR,
};

interface IProps {
  concept: Concept;
}

const Page: NextPage<IProps> = ({ concept }) => {
  const MDXContent = useMDXComponent(concept.body.code);

  const publishedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="sm">Published on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(concept.date).format("LL")}
        </Text>
      </HStack>
    );
  };

  const updatedMetaNode = () => {
    return (
      <HStack spacing={2} isInline alignItems="center" color="gray.400">
        <Text fontSize="sm">This post was updated on</Text>
        <Text fontSize="sm" fontWeight="bold">
          {dayjs(concept.lastmod).format("LL")}.
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
        {concept.title}
      </Heading>
    );
  };

  return (
    <>
      <NextSeo
        title={`${concept.title}`}
        description={concept.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: `${concept.title}`,
          description: concept.description,
          images: [
            {
              url: concept.coverImage
                ? concept.coverImage
                : `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: concept.title,
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
            templateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
            gridGap={[0, 0, 0, 4]}
          >
            <VStack
              spacing={8}
              pos="sticky"
              top={8}
              h="100vh"
              overflow="scroll"
              display={["none", "none", "none", "block"]}
            >
              <Sidebar source={concept.body.raw} />
            </VStack>
            <Box maxW="100%" overflowX="hidden">
              <VStack spacing={8} align="left">
                <VStack spacing={2} align="left">
                  {publishedMetaNode()}
                  {titleNode()}
                </VStack>
                <Box className="article">
                  <MDXContent components={components} />
                </Box>
                {updatedMetaNode()}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
