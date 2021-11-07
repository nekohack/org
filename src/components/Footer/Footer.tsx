import * as React from 'react'
import i18next from 'i18next'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <a href="https://nekohack-privacy-policy.netlify.app">
            {i18next.t('at_once_read_privacy_policy')}
          </a>
          <br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform">
            {i18next.t('please_contact_easily_from_the_survey_form')}
          </a>
        </p>

        <div className={styles.footerLinks}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
