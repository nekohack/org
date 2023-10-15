import { css } from '@emotion/react'
import { t } from 'i18next'
import { socialLinks as _socialLinks } from '@org/shared/data'
import { useEmitEvent } from '@org/shared/hooks'
import { Icon } from '@org/shared/ui'
import SkillsSection from '@sections/SkillsSection'
import WorksSection from '@sections/WorksSection'
import { Layout } from '@components/Layout'
import JobSection from '@components/Job'
import PortraitSection from '@sections/PortraitSection'
import { NavSection } from '@components/Nav'
import { FooterSection } from '@components/Footer'
import { SEO } from '@components/SEO'
import { JOB } from '@utils/feature.constants'
import { defaultLanguage, languages } from '../../../i18n.config'
import { useEffectOnce } from 'react-use'

export default function Home() {
  const { dispatch } = useEmitEvent('focusOnContact', true)

  useEffectOnce(() => {
    if (JOB) {
      _socialLinks.unshift({
        text: 'person',
        description: 'Timeline',
        url: '#job_timeline',
        enabled: true,
      })
    }
  })

  return (
    <Layout>
      <main>
        <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

        <NavSection />

        <div
          css={css`
            max-height: 200px;
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
            I am Yuma
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
            Web Developer
          </h2>
        </div>

        <p>{`${t('basic_biography')}`}</p>

        <div
          css={css`
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin: 1.5rem 0;
            &:nth-child(2n + 2) {
              margin: 0 10px;
            }
            @media (max-width: 320px) {
              grid-template-columns: auto;
            }
          `}
        >
          {_socialLinks.map((s, index) => (
            <a
              key={index}
              onClick={s.text === 'person' ? dispatch : undefined}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                color: #000;
                background: #ddd;
                padding: 0.3rem 1.5rem;
                font-size: 1rem;
                cursor: pointer;
                border-radius: 0.2rem;
                &:hover,
                &:focus {
                  filter: brightness(150%);
                  transform: translateY(-0.2rem);
                }
                @media (prefers-color-scheme: dark) {
                  color: #fff;
                  background: #1e2126;
                }
              `}
            >
              <div
                css={css`
                  width: 1.2rem;
                  margin-right: 1.2rem;
                `}
              >
                <Icon name={s.text} />
              </div>
              {s.description}
            </a>
          ))}
        </div>

        <SkillsSection />

        <WorksSection />

        {JOB && <JobSection />}

        <PortraitSection />

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
