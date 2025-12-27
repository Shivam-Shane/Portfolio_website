// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* NO <title> here — set titles in pages/_app.js or per-page with next/head */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/css/maven-pro.css" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"
          defer
        ></script>
      </body>
    </Html>
  );
}
