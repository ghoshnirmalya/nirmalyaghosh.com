import {
  Box,
  Grid,
  Heading,
  Link as _Link,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import siteConfig from "config/site";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React from "react";
import { IoLogoGithub, IoMdEye } from "react-icons/io";

const SocialLinks = dynamic(
  import(/* webpackChunkName: "SocialLinks" */ "components/social-links")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);
const SocialShare = dynamic(
  import(/* webpackChunkName: "SocialShare" */ "components/social-share"),
  {
    ssr: false,
  }
);

const DocsMdxLayout = ({ frontMatter, children }) => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "white", dark: "black" };
  const sectionColor = { light: "black", dark: "gray.100" };

  const titleNode = (title: string) => {
    return (
      <Heading as="h1" size="xl">
        {title}
      </Heading>
    );
  };

  const githubButtonNode = () => {
    if (!frontMatter.githubLink) {
      return false;
    }

    return (
      <_Link
        py={2}
        px={4}
        href={frontMatter.githubLink}
        rounded="md"
        bg="#333"
        color="#fff"
        fontWeight="bold"
        isExternal
      >
        <Stack spacing={2} isInline alignItems="center">
          <Box as={IoLogoGithub} />
          <Text>View source</Text>
        </Stack>
      </_Link>
    );
  };

  const demoButtonNode = () => {
    if (!frontMatter.demoLink) {
      return false;
    }

    return (
      <_Link
        py={2}
        px={4}
        href={frontMatter.demoLink}
        rounded="md"
        bg="#754abb"
        color="#fff"
        fontWeight="bold"
        isExternal
      >
        <Stack spacing={2} isInline alignItems="center">
          <Box as={IoMdEye} /> <Text>View demo</Text>
        </Stack>
      </_Link>
    );
  };

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | ${siteConfig.details.title}`}
        description={frontMatter.description}
        openGraph={{
          url: `${siteConfig.details.url}/${frontMatter.__resourcePath.replace(
            ".mdx",
            "/"
          )}`,
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
      <SocialLinks />
      <Navbar />
      <Box bg={sectionBgColor[colorMode]} color={sectionColor[colorMode]}>
        <Box maxW="3xl" mx="auto" px={4} py={8}>
          <Grid templateColumns="1fr">
            <Box maxW="100%" overflowX="hidden">
              <Stack spacing={8}>
                {titleNode(frontMatter.title)}
                <Box>
                  <Box d="flex" alignItems="center">
                    <Stack spacing={4} isInline>
                      {githubButtonNode()}
                      {demoButtonNode()}
                    </Stack>
                  </Box>
                </Box>
                <Box className="article">{children}</Box>
                <Box>
                  <SocialShare title={frontMatter.title} />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default DocsMdxLayout;
