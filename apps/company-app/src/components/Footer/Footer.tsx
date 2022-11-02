import i18next from 'i18next'
import { LinkText } from '@org/shared/ui'
import styles from './footer.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          <LinkText
            name={i18next.t('at_once_read_privacy_policy')}
            url="https://nekohack-privacy-policy.netlify.app/"
          >
            {i18next.t('at_once_read_privacy_policy') as string}
          </LinkText>
          <br />
          <LinkText
            name={i18next.t('at_once_read_privacy_policy')}
            url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
          >
            {i18next.t('please_contact_easily_from_the_survey_form') as string}
          </LinkText>
        </p>

        <div className={styles.footerLinks}>
          <LinkText name="Twitter" url="https://twitter.com/jiyuujinlab">
            Twitter
          </LinkText>
          <LinkText name="GitHub" url="https://github.com/jiyuujin">
            GitHub
          </LinkText>
        </div>
      </div>
    </footer>
  )
}
