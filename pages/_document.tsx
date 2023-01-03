import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="IrBdsYE_b8xi2Yt3qVUdf0jCWzjuDnshFMrv4pQtoQY"
          />
          <meta
            name="ahrefs-site-verification"
            content="a3cfb025018605bc9a5fcfd78fad26e8784fb310e1da70f90309d72114de2b55"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
