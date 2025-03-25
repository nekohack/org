import Head from 'next/head'
import { Typography } from '@org/shared/ui'

const Custom404 = () => {
  return (
    <main>
      <Head>
        <title>Page Not Found | 404 - nekohack.me</title>
        <meta property="og:title" content="Page Not Found - Casper Iversen" />
        <link rel="canonical" href="https://nekohack.me/404" />
      </Head>
      <Typography variant="title 1">404</Typography>
      <Typography variant="subtitle 1">Page Not Found</Typography>
    </main>
  )
}

export default Custom404
