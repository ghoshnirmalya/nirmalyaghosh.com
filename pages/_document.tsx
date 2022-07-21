import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
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
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
