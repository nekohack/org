import { css } from '@emotion/react'
import { t } from 'i18next'
import { useEmitEvent } from '@org/shared/hooks'
import { Icon } from '@org/shared/ui'
import SkillsSection from '@sections/SkillsSection'
import WorksSection from '@sections/WorksSection'
import JobSection from '@components/Job'
import PortraitSection from '@sections/PortraitSection'
import { NavSection } from '@components/Nav'
import { FooterSection } from '@components/Footer'
import { SEO } from '@components/SEO'
import { JOB } from '@utils/feature.constants'
import { defaultLanguage, languages } from '../../../i18n.config'

export default function Home() {
  const { dispatch } = useEmitEvent('focusOnContact', true)

  return (
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
        {JOB && (
          <a
            onClick={dispatch}
            href="#job_timeline"
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000;
              background: #ddd;
              padding: 0.3rem 1.5rem;
              font-size: 1rem;
              color: white;
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
            <Icon
              name="person"
              css={css`
                width: 1.2rem;
                margin-right: 1.2rem;
              `}
            />
            {`${t('job_timeline')}`}
          </a>
        )}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
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
          <Icon
            name="email"
            css={css`
              width: 1.2rem;
              margin-right: 1.2rem;
            `}
          />
          Contact
        </a>
        <a
          href="https://github.com/jiyuujin"
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
            color: white;
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
          <Icon
            name="github"
            css={css`
              width: 1.2rem;
              margin-right: 1.2rem;
            `}
          />
          GitHub
        </a>
        <a
          href="https://twitter.com/jiyuujinlab"
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
          <Icon
            name="twitter"
            css={css`
              width: 1.2rem;
              margin-right: 1.2rem;
            `}
          />
          Twitter
        </a>
      </div>

      <SkillsSection />

      <WorksSection />

      {JOB && <JobSection />}

      <PortraitSection />

      <FooterSection />
    </main>
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
