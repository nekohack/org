import Head from 'next/head'
import mainStyles from 'css/main.module.scss'

const Custom404 = () => {
  return (
    <main>
      <Head>
        <title>Page Not Found | 404 - nekohack.me</title>
        <meta property="og:title" content="Page Not Found - Casper Iversen" />
        <link rel="canonical" href="https://nekohack.me/404" />
      </Head>
      <div className={mainStyles.mainTitle}>
        <h1>404</h1>
      </div>
      <div className={mainStyles.mainText}>
        <p>Page Not Found</p>
      </div>
    </main>
  )
}

export default Custom404
