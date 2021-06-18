import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import siteConfig from "config/site";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import IFrontMatter from "types/frontMatter";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

interface IProps {
  content: any;
  frontMatter: IFrontMatter;
}

const SocialShare = dynamic(
  import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);

const Page: NextPage<IProps> = ({ content, frontMatter }) => {
  const metaNode = (date: string) => {
    return (
      <HStack spacing={2} isInline alignItems="center">
        <Text fontSize="xs">Published on</Text>
        <Text fontSize="xs" fontWeight="bold">
          {dayjs(date).format("LL")}
        </Text>
        <Text fontSize="xs">and it's a</Text>
      </HStack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h1" size="xl">
        {title}
      </Heading>
    );
  };

  const coverImageNode = () => {
    if (!frontMatter.coverImage) {
      return (
        <Box h={64} pos="relative">
          <Image
            src="/images/common/cover.jpg"
            alt={frontMatter.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
      );
    }

    return (
      <Box h={64} pos="relative">
        <Image
          src={frontMatter.coverImage}
          alt={frontMatter.title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Box>
    );
  };

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | ${siteConfig.details.title}`}
        description={frontMatter.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: siteConfig.details.title,
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
        {coverImageNode()}
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <Grid templateColumns="1fr">
            <Box maxW="100%" overflowX="hidden">
              <VStack spacing={8} align="left">
                {metaNode(frontMatter.date)}
                {titleNode(frontMatter.title)}
                <Box>
                  <SocialShare title={frontMatter.title} />
                </Box>
                <Box className="article">{content}</Box>
                <Box>
                  <SocialShare title={frontMatter.title} />
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
