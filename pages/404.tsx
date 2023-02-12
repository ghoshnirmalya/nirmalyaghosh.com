import { Center, Heading } from "@chakra-ui/react";
import siteConfig from "config/site";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        openGraph={{
          url: `${siteConfig.details.url}`,
          title: `${siteConfig.details.title}`,
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Center minH="calc(100vh - 200px)">
        <Heading>Page not found!</Heading>
      </Center>
    </>
  );
};

export default NotFoundPage;
