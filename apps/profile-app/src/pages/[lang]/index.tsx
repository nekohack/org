import { defaultLanguage, languages } from '../../../i18n.config'
import { Layout } from '@components/Layout'
import { Index as NoticeBar } from '@components/Notice'
import Home from '@components/Home'
import { FooterSection } from '@components/Footer'

export default function Lang() {
  return (
    <Layout>
      <NoticeBar />
      <main>
        <Home />
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
  return {
    props: {
      language: languages.includes(params.lang) ? params.lang : defaultLanguage,
    },
  }
}
