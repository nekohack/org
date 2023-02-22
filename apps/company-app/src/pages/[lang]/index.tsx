import { t } from 'i18next'
import { useEmitEvent } from '@org/shared/hooks'
import { Icon, LinkText } from '@org/shared/ui'
import SkillsSection from '@sections/SkillsSection'
import WorksSection from '@sections/WorksSection'
import JobSection from '@components/Job'
import PortraitSection from '@sections/PortraitSection'
import { NavSection } from '@components/Nav'
import { FooterSection } from '@components/Footer'
import { SEO } from '@components/SEO'
import { JOB } from '@utils/feature.constants'
import mainStyles from 'css/main.module.scss'
import { defaultLanguage, languages } from '../../../i18n.config'

export default function Home() {
  const { dispatch } = useEmitEvent('focusOnContact', true)

  return (
    <main>
      <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

      <NavSection />

      <div className={mainStyles.mainTitle}>
        <h1>I am Yuma</h1>
        <h2>Web Developer</h2>
      </div>

      <p>{`${t('basic_biography')}`}</p>

      <div className={mainStyles.btnContainer}>
        {JOB && (
          <a onClick={dispatch} className="btn btn__light btn__icon" href="#job_timeline">
            <Icon name="person" />
            {`${t('job_timeline')}`}
          </a>
        )}
        <LinkText
          ariaLabel="contact"
          url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
          customClass="btn btn__light btn__icon"
        >
          <Icon name="email" />
          Contact
        </LinkText>
        <LinkText
          ariaLabel="github"
          url="https://github.com/jiyuujin"
          customClass="btn btn__light btn__icon"
        >
          <Icon name="github" />
          GitHub
        </LinkText>
        <LinkText
          ariaLabel="twitter"
          url="https://twitter.com/jiyuujinlab"
          customClass="btn btn__light btn__icon"
        >
          <Icon name="twitter" />
          Twitter
        </LinkText>
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
