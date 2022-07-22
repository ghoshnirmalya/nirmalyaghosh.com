import Navbar from "components/Navbar";
import siteConfig from "configs/site";
import { AppProps } from "next/app";
import Head from "next/head";

import "public/styles/tailwind.css";

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
      </Head>

      <div className="space-y-16 min-h-screen">
        <Navbar />
        <main className="p-4 max-w-2xl mx-auto w-full flex justify-between items-center">
          <Component {...pageProps} />
        </main>
        <footer className="text-center pb-16 sticky top-[100vh]">✌🏻</footer>
      </div>
    </>
  );
};

export default PortfolioApp;
