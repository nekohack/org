import { NekoButton } from 'nekohack-ui'
import { t } from 'i18next'
import * as SC from './card.module.scss'
import { Typography } from '@org/shared/ui'
import PlaneLogoSvg from 'public/icons/plane_logo.svg'

export const Card: FC = () => {
  return (
    <div className={SC.content}>
      <div className={SC.cardInfo}>
        <Typography variant="body 2">Yuma Kitamura</Typography>
        <Typography variant="body 3">{t('covid19.fully_vaccinated')}</Typography>
        <ul className={SC.position}>
          {'Front-End Engineer,Web Developer,HR Adviser'.split(',').map((p: string) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className={SC.contact}>
          <NekoButton
            onClick={() => {
              const url =
                'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform'
              window.open(url, '_blank')
            }}
          >
            {t('contact')}
            <PlaneLogoSvg />
          </NekoButton>
        </div>
      </div>
    </div>
  )
}
