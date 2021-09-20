import { Box, Grid, Heading, HStack, VStack } from "@chakra-ui/react";
import siteConfig from "config/site";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";
import { IoIosPaper } from "react-icons/io";
import IFrontMatter from "types/frontMatter";
import IGuide from "types/guide";

interface IProps {
  content: any;
  frontMatter: IFrontMatter;
  guides: any;
  slug: string;
}

const Page: NextPage<IProps> = ({ content, frontMatter, guides, slug }) => {
  const sidebarNode = () => {
    return (
      <Box>
        <VStack spacing={6} align="left" pos="sticky" top={8}>
          <HStack spacing={2} alignItems="center">
            <Box as={IoIosPaper} fontSize="xl" />
            <Heading as="h3" fontSize="xl">
              Documentation
            </Heading>
          </HStack>
          <VStack spacing={2} align="left">
            {guides.map((guide: IGuide, index: number) => {
              return (
                <Box key={guide.slug}>
                  <Link
                    href={{
                      pathname: "/guides/[slug]/[chapter]",
                      query: {
                        slug,
                        chapter: guide.slug,
                      },
                    }}
                  >
                    <a>
                      <Box
                        fontSize="sm"
                        fontWeight={index === 0 ? "bold" : "normal"}
                      >
                        {index + 1}. {guide.frontMatter.title}
                      </Box>
                    </a>
                  </Link>
                </Box>
              );
            })}
          </VStack>
        </VStack>
      </Box>
    );
  };

  return (
    <>
      <NextSeo
        title={`${frontMatter.title}`}
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
      <Box bg="black" color="gray.100">
        <Box maxW="6xl" mx="auto" px={4} py={8}>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
            gridColumnGap={8}
            gridRowGap={8}
          >
            {sidebarNode()}
            <Box maxW="100%" overflowX="hidden">
              <VStack spacing={8} align="left">
                <Box className="article">{content}</Box>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Page;
