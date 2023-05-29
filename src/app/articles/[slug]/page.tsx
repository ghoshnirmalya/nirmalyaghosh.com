import Page from "components/pages/articles/[slug]";
import siteConfig from "config/site";
import { getAllArticles, getCurrentArticle } from "lib/get-articles-data";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const currentArticle = getCurrentArticle(params.slug);

  return {
    title: currentArticle.title,
    description: currentArticle.description,
    openGraph: {
      title: currentArticle.title,
      description: currentArticle.description,
      url: `${siteConfig.details.url}/guides/${params.slug}`,
      siteName: siteConfig.details.title,
      images: [
        {
          url: `https://cover-images.vercel.app/api?postTitle=${currentArticle.title}&postDescription=${currentArticle.description}&backgroundColor=1a202c&foregroundColor=fff&authorAvatar=${siteConfig.assets.favicon}&authorName=${siteConfig.details.title}`,
          width: 1200,
          height: 675,
          alt: currentArticle.title,
        },
      ],
      type: "article",
      locale: "en_IE",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.details.title,
      description: siteConfig.details.description,
      creator: siteConfig.socialLinks.twitter,
      images: [`${siteConfig.assets.avatar}`],
    },
    verification: {
      google: "IrBdsYE_b8xi2Yt3qVUdf0jCWzjuDnshFMrv4pQtoQY",
      other: {
        "ahrefs-site-verification": [
          "a3cfb025018605bc9a5fcfd78fad26e8784fb310e1da70f90309d72114de2b55",
        ],
      },
    },
    category: "technology",
  };
}

export default async function ArticlesSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return <Page articleSlug={params.slug} />;
}

export async function generateStaticParams() {
  return getAllArticles().map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
}
