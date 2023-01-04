import { NekoButton } from 'nekohack-ui'
import i18next from 'i18next'
import * as SC from './card.module.scss'
import PlaneLogoSvg from 'public/icons/plane_logo.svg'

export const Card: FC = () => {
  return (
    <div className={SC.content}>
      <div className={SC.cardInfo}>
        <h2 className={SC.name}>Yuma Kitamura</h2>
        <span className={SC.tag}>{i18next.t('covid19.fully_vaccinated')}</span>
        <ul className={SC.position}>
          {'Front-End Engineer,Web Developer,HR Adviser'.split(',').map((p: string) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className={SC.contact}>
          <NekoButton
            onClick={() => {
              const url =
                'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform'
              window.open(url, '_blank')
            }}
          >
            {i18next.t('contact')}
            <PlaneLogoSvg />
          </NekoButton>
        </p>
      </div>
    </div>
  )
}
