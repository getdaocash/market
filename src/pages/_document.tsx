import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta
            name="keywords"
            content="defi, market, permissionless, pools, earn, yields, web3"
          />
          <meta name="twitter:site" content="@market_xyz" />
          <meta name="twitter:creator" content="@market_xyz" />
          <meta
            name="description"
            content="Earn yield and leverage any asset in the DeFi ecosystem with Market Protocol."
          />
          <meta name="author" content="Market.xyz" />
          <meta property="og:site_name" content="Market Protocol" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Earn yield and leverage any asset in the DeFi ecosystem with Market Protocol."
          />
          <meta property="og:url" content="https://polygon.market.xyz/" />
          <meta
            property="og:image"
            itemProp="image"
            content="https://res.cloudinary.com/marketxyz/image/upload/v1637862398/Adthumbnail_kbndl2.png"
          />
          <meta name="twitter:title" content="Market Protocol" />
          <meta
            name="twitter:description"
            content="Earn yield and leverage any asset in the DeFi ecosystem with Market Protocol."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/marketxyz/image/upload/v1637862398/Adthumbnail_kbndl2.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="description"
            content="Earn yield & leverage on any assets on your terms with Market"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          {/* <title>Market Protocol</title> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
