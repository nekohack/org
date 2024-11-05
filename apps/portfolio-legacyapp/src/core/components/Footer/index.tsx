import { t } from 'i18next'
import { LinkText, Typography } from '@org/shared/ui'

export const FooterSection: FC = () => {
  return (
    <footer className="footer">
      <LinkText
        ariaLabel={t('contact')}
        url="https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform"
      >
        {t('contact')}
      </LinkText>
      <LinkText ariaLabel={t('privacy_policy')} url="https://policy.nekohack.me/privacy">
        {t('privacy_policy')}
      </LinkText>
      <Typography variant="body 1">
        Created © 2020-2023 jiyuujin LAB. All Rights Reserved.
      </Typography>
    </footer>
  )
}
