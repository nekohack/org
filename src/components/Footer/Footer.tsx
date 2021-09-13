import * as React from 'react'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          At once read <a href="https://nekohack-privacy-policy.netlify.app">Privacy Policy</a>
          <br />
          Please contact easily from{' '}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform">
            Survey Form
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
