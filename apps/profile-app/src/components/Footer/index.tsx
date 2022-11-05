import i18next from 'i18next'
import { LinkText } from '@org/shared/ui'
import * as SC from './index.module.scss'

export const FooterSection: FC = () => {
  return (
    <footer className={SC.footer}>
      <p className={SC.contact}>
        <LinkText
          name={i18next.t('contact')}
          url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
        >
          {i18next.t('contact')}
        </LinkText>
      </p>
      <p className={SC.copyright}>Created © 2020 jiyuujin LAB. All Rights Reserved.</p>
    </footer>
  )
}
