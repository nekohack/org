import * as React from 'react'
import { useEmitEvent } from '@hooks/useEmitEvent'
import SkillsSection from '@sections/SkillsSection'
import TimelineSection from '@sections/TimelineSection'
import { PersonIcon, ContactIcon, GitHubIcon, TwitterIcon } from '@components/Icons/About'
import { Nav } from '@components/Nav'
import { Footer } from '@components/Footer'
import { SEO } from '@components/SEO'
import mainStyles from 'css/main.module.scss'

const Index = () => {
  const { dispatch } = useEmitEvent('focusOnContact', true)

  return (
    <main>
      <SEO title="nekohack.me | Yuma Kitamura - Web Developer" />

      <Nav />

      <div className={mainStyles.mainTitle}>
        <h1>I am Yuma</h1>
        <h2>Web Developer</h2>
      </div>

      <p className={mainStyles.mainText}>
        On the net, they live under the name of JIYUUJIN. Birthday is November 04, 1988. Born in
        Toyonaka City, Osaka Prefecture. Gender is male. Currently, we are active mainly in the
        Kansai area (Kyoto and Osaka).
      </p>

      <div className={mainStyles.btnContainer}>
        <a onClick={dispatch} className="btn btn__light btn__icon" href="#timeline">
          <PersonIcon />
          Timeline
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn__light btn__icon"
          href={process.env.NEXT_PUBLIC_CONTACT_URL}
        >
          <ContactIcon />
          Contact
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn__light btn__icon"
          href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn__light btn__icon"
          href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
        >
          <TwitterIcon />
          Twitter
        </a>
      </div>

      <SkillsSection />

      <TimelineSection />

      <Footer />
    </main>
  )
}

export default Index
