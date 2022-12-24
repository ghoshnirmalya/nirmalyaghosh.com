import "public/styles/tailwind.css";

import Navbar from "components/Navbar";
import { AppProps } from "next/app";
import Head from "next/head";

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
