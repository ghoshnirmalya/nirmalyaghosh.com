import { HighlightInit } from "@highlight-run/next/client";
import { Inter } from "next/font/google";
import { env } from "src/env.mjs";

import AnalyticsProvider from "components/layouts/analytics-provider";
import ThemeProvider from "components/layouts/theme-provider";
import Navbar from "components/navbar";

import siteConfig from "config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${siteConfig.details.title} - ${siteConfig.details.tagLine}`,
  description: siteConfig.details.description,
  openGraph: {
    title: siteConfig.details.title,
    description: siteConfig.details.description,
    url: siteConfig.details.url,
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
    google: env.GOOGLE_SITE_VERIFICATION,
    other: {
      "ahrefs-site-verification": [env.AHREFS_SITE_VERIFICATION],
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HighlightInit
        projectId={env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
        serviceName={env.NEXT_PUBLIC_HIGHLIGHT_SERVICE_NAME}
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
          urlBlocklist: [],
        }}
      />
      <html lang="en">
        <body className={inter.className}>
          <AnalyticsProvider>
            <ThemeProvider>
              <Navbar />
              {children}
            </ThemeProvider>
          </AnalyticsProvider>
        </body>
      </html>
    </>
  );
}
