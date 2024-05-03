import { css } from '@emotion/react'
import { Icon, Link } from '@org/shared/ui'
import { socialLinks as _socialLinks } from '@org/shared/data'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import { defaultLanguage, languages } from '../../../i18n.config'

export default function Home() {
  return (
    <Layout>
      <main
        css={css`
          position: relative;
          max-width: none;
          &::before {
            content: '';
            position: absolute;
            display: block;
            inset: 0;
            width: 100%;
            height: 100%;
            background-image: url('/images/jiyuujin_backshot.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.8;
            mix-blend-mode: overlay;
          }
        `}
      >
        <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

        <div
          css={css`
            display: grid;
            place-items: center;
            gap: 40px;
            max-width: 768px;
            margin: 0 auto;
            width: 100%;
            height: 100vh;
            grid-template-columns: minmax(0, 1fr);
            isolation: isolate;
          `}
        >
          <h1
            css={css`
              width: 340px;
              margin: 0;
              font-size: clamp(2.8rem, 10vw, 5.5rem);
              line-height: 124px;
              text-align: center;
              text-transform: uppercase;
            `}
          >
            Hi, I am camera fan
          </h1>
          <h2
            css={css`
              margin: 0;
              display: grid;
              place-items: center;
              gap: 20px;
              font-size: clamp(1.12rem, 6vw, 1.92rem);
              font-weight: 400;
              text-align: center;
              text-transform: uppercase;
            `}
          >
            <span>Nikon Photographer 📸</span>
            <span>Application Developer 🛠️</span>
          </h2>
          <div
            css={css`
              display: flex;
              justify-content: center;
              gap: 0.5rem;
              margin: 1.5rem 0;
              &:nth-child(2n + 2) {
                margin: 0 10px;
              }
              @media (max-width: 767px) {
                flex-direction: column;
              }
            `}
          >
            {_socialLinks
              .filter((s) => s.enabled)
              .map((s, key) => (
                <Link key={key} href={s.url}>
                  <div
                    css={css`
                      width: 1.2rem;
                      margin-right: 1.2rem;
                    `}
                  >
                    <Icon name={s.text} />
                  </div>
                  {s.description}
                </Link>
              ))}
          </div>
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
