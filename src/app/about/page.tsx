import Page from "components/pages/about/base";
import siteConfig from "config/site";

export const metadata = {
  title: `${siteConfig.details.title} - ${siteConfig.details.tagLine}`,
  description: siteConfig.details.description,
  openGraph: {
    title: siteConfig.details.title,
    description: siteConfig.details.description,
    url: `${siteConfig.details.url}/about`,
    siteName: siteConfig.details.title,
    images: [
      {
        url: `${siteConfig.assets.avatar}`,
        width: 800,
        height: 600,
        alt: siteConfig.details.title,
      },
    ],
    type: "website",
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

export default async function AboutPage() {
  return <Page />;
}
