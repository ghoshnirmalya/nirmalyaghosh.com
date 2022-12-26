import "public/styles/tailwind.css";

import Navbar from "components/Navbar";
import siteConfig from "configs/site";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: siteConfig.details.url,
          siteName: siteConfig.details.title,
        }}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
      />
      <div className="min-h-screen space-y-16">
        <Navbar />
        <main className="mx-auto flex w-full max-w-2xl items-center justify-between p-4">
          <Component {...pageProps} />
        </main>
        <footer className="sticky top-[100vh] pb-16 text-center">✌️</footer>
      </div>
    </>
  );
};

export default PortfolioApp;
