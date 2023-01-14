import { t } from 'i18next'
import { LinkText } from '@org/shared/ui'
import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <LinkText
            ariaLabel={t('at_once_read_privacy_policy')}
            url="https://nekohack-privacy-policy.netlify.app/"
          >
            {t('at_once_read_privacy_policy') as string}
          </LinkText>
          <br />
          <LinkText
            ariaLabel={t('at_once_read_privacy_policy')}
            url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
          >
            {t('please_contact_easily_from_the_survey_form') as string}
          </LinkText>
        </p>

        <div className={styles.footerLinks}>
          <LinkText ariaLabel="Twitter" url="https://twitter.com/jiyuujinlab">
            Twitter
          </LinkText>
          <LinkText ariaLabel="GitHub" url="https://github.com/jiyuujin">
            GitHub
          </LinkText>
        </div>
      </div>
    </footer>
  )
}
