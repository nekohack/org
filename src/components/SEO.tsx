import * as React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description?: string
  keywords?: string[]
  url?: string
}

const DEFAULT_KEYWORDS = ['nekohack', 'yuma kitamura', 'ghostybot', 'snaily cad', 'kyoto', 'osaka']

const defaults: Props = {
  title: 'nekohack.me | Yuma Kitamura - Web Developer',
  url: 'https://nekohack.me',
  description: 'Hi, I am Yuma Kitamura! A Web Developer.',
  keywords: [],
}

export const SEO = (props: Props) => {
  const tags = {
    ...defaults,
    ...props,
  }

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="twitter:title" content={tags.title} />
      <meta property="og:site_name" content={tags.title} />
      <meta property="og:title" content={tags.title} />

      <meta name="description" content={tags.description} />
      <meta property="og:description" content={tags.description} />
      <meta name="twitter:description" content={tags.description} />

      <link rel="canonical" href={tags.url} />
      <meta property="og:url" content={tags.url} />

      <meta name="keywords" content={[...DEFAULT_KEYWORDS, ...tags.keywords].join(', ')} />
    </Head>
  )
}
