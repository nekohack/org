import { defaultLanguage, languages } from '../../../i18n.config'
import { Layout } from '@common/Layout'
import { Index as NoticeBar } from '@components/Notice'
import Home from '@common/Home'
import { FooterSection } from '@components/Footer'
import { UKRAINE } from '@core/feature.constants'

export default function Lang() {
  return (
    <Layout>
      {UKRAINE && <NoticeBar />}
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
