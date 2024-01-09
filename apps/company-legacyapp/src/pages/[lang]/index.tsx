import { css } from '@emotion/react'
import { socialLinks as _socialLinks } from '@org/shared/data'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { defaultLanguage, languages } from '../../../i18n.config'

export default function Home() {
  return (
    <Layout>
      <main>
        <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

        <div
          css={css`
            height: 100vh;
            display: grid;
            place-items: center;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: clamp(2rem, 10vw, 5.5rem);
              line-height: 55pt;
              text-align: center;
              text-transform: uppercase;
            `}
          >
            Building
          </h1>
          <h2
            css={css`
              margin: 0;
              font-size: clamp(1.2rem, 6vw, 2.5rem);
              font-weight: 400;
              text-align: center;
              text-transform: uppercase;
            `}
          >
            i wanna a new website, but..
          </h2>
        </div>
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
