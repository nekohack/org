import i18next from 'i18next'
import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <a href="https://nekohack-privacy-policy.netlify.app">
            {i18next.t('at_once_read_privacy_policy') as string}
          </a>
          <br />
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform">
            {i18next.t('please_contact_easily_from_the_survey_form') as string}
          </a>
        </p>

        <div className={styles.footerLinks}>
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/jiyuujinlab">
            Twitter
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/jiyuujin">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
