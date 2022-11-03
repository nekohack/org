import i18next from 'i18next'
import { Contact, GitHub, LinkText, Person, Twitter } from '@org/shared/ui'
import { useEmitEvent } from '@hooks/useEmitEvent'
import SkillsSection from '@sections/SkillsSection'
import WorksSection from '@sections/WorksSection'
import PortraitSection from '@sections/PortraitSection'
import { Nav } from '@components/Nav'
import { Footer } from '@components/Footer'
import { SEO } from '@components/SEO'
import mainStyles from 'css/main.module.scss'
import { defaultLanguage, languages } from '../../../i18n.config'

export default function Home() {
  const { dispatch } = useEmitEvent('focusOnContact', true)

  return (
    <main>
      <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

      <Nav />

      <div className={mainStyles.mainTitle}>
        <h1>I am Yuma</h1>
        <h2>Web Developer</h2>
      </div>

      <p className={mainStyles.mainText}>{i18next.t('basic_biography') as string}</p>

      <div className={mainStyles.btnContainer}>
        <a onClick={dispatch} className="btn btn__light btn__icon" href="#timeline">
          <Person />
          Timeline
        </a>
        <LinkText
          name="contact"
          url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
          custom="btn btn__light btn__icon"
        >
          <Contact />
          Contact
        </LinkText>
        <LinkText name="github" url="https://github.com/jiyuujin" custom="btn btn__light btn__icon">
          <GitHub />
          GitHub
        </LinkText>
        <LinkText
          name="twitter"
          url="https://twitter.com/jiyuujinlab"
          custom="btn btn__light btn__icon"
        >
          <Twitter />
          Twitter
        </LinkText>
      </div>

      <SkillsSection />

      <WorksSection />

      <PortraitSection />

      <Footer />
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
