import { Head, Html, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  const GA_ID = process.env.NEXT_PUBLIC_GA || "G-B2032WPKYW";

  return (
    <Html lang="en">
      <Head>
        <link

          href="https://fonts.googleapis.com/css2?family=Geologica:wght@200;300;400&family=Rubik&display=swap" rel="styleshee"
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW3K2P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
