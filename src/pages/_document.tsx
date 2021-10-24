import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class NekohackMe extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/Catamaran-Regular.ttf" as="font" type="font/ttf" />
          <link rel="preload" href="/fonts/Catamaran-Medium.ttf" as="font" type="font/ttf" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="mask-icon" href="/favicons//safari-pinned-tab.svg" color="#161b22" />
          <meta property="og:title" content="nekohack.me | Yuma Kitamura - Web Developer" />
          <meta property="og:description" content="Hi, I am Yuma Kitamura! A Web Developer." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://nekohack.me/og/top.jpg" />
          <meta property="og:url" content="https://nekohack.me" />
          <meta name="twitter:title" content="nekohack.me | Yuma Kitamura - Web Developer" />
          <meta name="twitter:description" content="Hi, I am Yuma Kitamura! A Web Developer." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@jiyuujinlaab" />
          <meta name="twitter:creator" content="@jiyuujinlaab" />
          <meta name="twitter:site" content="@jiyuujinlaab" />
          <meta name="twitter:image" content="https://nekohack.me/og/top.jpg" />
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            data-ad-client="ca-pub-7095980629133842"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NekohackMe
