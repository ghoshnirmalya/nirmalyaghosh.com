import React, { FC } from "react";
import { Box, Grid, Stack } from "@chakra-ui/react";
import IArticle from "types/article";
import IPublication from "types/publication";
import IProject from "types/project";
import LazyLoad from "react-lazyload";
import dynamic from "next/dynamic";

const Jumbotron = dynamic(import("components/pages/index/jumbotron"));
const NewsletterSubscriptionForm = dynamic(
  import("components/pages/index/newsletter-subscription-form")
);
const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);
const Publications = dynamic(
  import(
    /* webpackChunkName: "Publications" */ "components/layouts/publications"
  )
);
const Projects = dynamic(
  import(/* webpackChunkName: "Projects" */ "components/pages/index/projects")
);
const SocialLinks = dynamic(
  import(/* webpackChunkName: "SocialLinks" */ "components/social-links")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);

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
  const sortedArticles = articles.sort(
    (a: IArticle, b: IArticle) =>
      Number(new Date(b.date)) - Number(new Date(a.date))
  );

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
                <LazyLoad once offset={300}>
                  <Articles articles={sortedArticles.slice(0, 3)} />
                </LazyLoad>
              </Box>
              <Box as="section">
                <LazyLoad once offset={300}>
                  <Publications publications={publications.slice(0, 3)} />
                </LazyLoad>
              </Box>
              <Box as="section">
                <LazyLoad once offset={300}>
                  <Projects projects={projects.slice(0, 3)} />
                </LazyLoad>
              </Box>
            </Stack>
            <Box order={[1, 1, 1, 2]}>
              <Stack spacing={8} position="sticky" top="96px">
                <Box>
                  <LazyLoad once offset={300}>
                    <NewsletterSubscriptionForm />
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
