import Page from "components/pages/guides/[slug]";
import siteConfig from "config/site";
import { getAllGuides, getCurrentGuide } from "lib/get-guides-data";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentGuide = getCurrentGuide(params.slug);

  return {
    title: currentGuide.title,
    description: currentGuide.description,
    openGraph: {
      title: currentGuide.title,
      description: currentGuide.description,
      url: `${siteConfig.details.url}/guides/${params.slug}`,
      siteName: siteConfig.details.title,
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
      type: "article",
      locale: "en_IE",
    },
  };
}

export default async function GuidesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return <Page guideSlug={params.slug} />;
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => {
    return {
      params: {
        slug: guide.slug,
      },
    };
  });
}
