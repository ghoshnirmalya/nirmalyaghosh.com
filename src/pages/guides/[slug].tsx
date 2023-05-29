import { Guide } from "contentlayer/generated";
import Page from "components/pages/guides/[slug]";
import { getAllGuides, getCurrentGuide } from "lib/get-guides-data";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "config/site";
import { useRouter } from "next/router";

interface IProps {
  currentGuide: Guide;
}

const GuidesSlugPage: NextPage<IProps> = ({ currentGuide }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={`${currentGuide.title}`}
        description={currentGuide.description}
        openGraph={{
          url: `${siteConfig.details.url}/guides/${router.query.slug}`,
          title: `${currentGuide.title}`,
          description: currentGuide.description,
          images: [
            {
              url: currentGuide.coverImage
                ? currentGuide.coverImage
                : `${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: currentGuide.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "article",
          locale: "en_IE",
        }}
      />
      <Page guide={currentGuide} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getAllGuides().map((guide) => {
      return {
        params: {
          slug: guide.slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentGuide = getCurrentGuide(params);

  return {
    props: {
      currentGuide,
    },
  };
};

export default GuidesSlugPage;
