import { defaultLanguage, languages } from '../../../i18n.config'
import { Layout } from '@components/Layout'
import { Index as NoticeBar } from '@components/Notice'
import Home from '@components/Home'
import { FooterSection } from '@components/Footer'
import Parser from 'rss-parser'

export default function Lang({ medias }) {
  return (
    <Layout>
      <NoticeBar />
      <main>
        <Home medias={medias} />
        <FooterSection />
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: languages.map((lang) => {
      return { params: { lang: lang } }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const _feed1 = await new Parser().parseURL('https://blog.nekohack.me/feed')
  const _feed2 = await new Parser().parseURL('https://zenn.dev/jiyuujin/feed')
  const _feed3 = await new Parser().parseURL('https://note.com/uraneko/rss')
  const items = [..._feed1.items, ..._feed2.items, ..._feed3.items].sort((a, b) => {
    if (new Date(a.pubDate) > new Date(b.pubDate)) {
      return -1
    } else {
      return 1
    }
  })

  return {
    props: {
      medias: items,
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
