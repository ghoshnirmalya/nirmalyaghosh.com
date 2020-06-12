import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/core";
import IArticle from "types/article";
import IPublication from "types/publication";
import IProject from "types/project";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const Jumbotron = dynamic(import("components/pages/index/jumbotron"));
const NewsletterSubscriptionForm = dynamic(
  import("components/pages/index/newsletter-subscription-form")
);
const Articles = dynamic(import("components/layouts/articles"));
const Publications = dynamic(import("components/layouts/publications"));
const Projects = dynamic(import("components/pages/index/projects"));
const SocialLinks = dynamic(import("components/social-links"));
const Navbar = dynamic(import("components/navbar"));
const Footer = dynamic(import("components/footer"));

interface Props {
  articles: IArticle[];
  publications: IPublication[];
  projects: IProject[];
}

const Page: FC<Props> = ({
  articles = [],
  publications = [],
  projects = [],
}) => {
  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <SocialLinks />
      <Navbar />
      <Box>
        <Box maxW="6xl" mx="auto" px={4} py={8}>
          <Grid templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]} gap={8}>
            <Stack spacing={32} order={[2, 2, 2, 1]}>
              <Box as="section">
                <LazyLoad once offset={100}>
                  <Articles articles={articles.slice(0, 3)} />
                </LazyLoad>
              </Box>
              <Box as="section">
                <LazyLoad once offset={100}>
                  <Publications publications={publications.slice(0, 3)} />
                </LazyLoad>
              </Box>
            </Stack>
            <Box order={[1, 1, 1, 2]}>
              <Stack spacing={8}>
                <Box>
                  <LazyLoad once offset={100}>
                    <NewsletterSubscriptionForm />
                  </LazyLoad>
                </Box>
                <Box>
                  <LazyLoad once offset={100}>
                    <Projects projects={projects.slice(0, 3)} />
                  </LazyLoad>
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

export default Page;
