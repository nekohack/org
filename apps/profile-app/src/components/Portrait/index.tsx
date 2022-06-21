import * as React from 'react'
import i18next from 'i18next'
import * as SC from './index.module.scss'

const Portrait: FC = () => {
  return (
    <section id="portrait">
      <h1 className="section__title">{i18next.t('portrait')}</h1>
      <p>{i18next.t('portrait_description')}</p>
      <div className={SC.photosContainer}>
        <div className={SC.standingImg}>
          <img alt="Standing" src="../../images/v-kansai_10.jpg" />
        </div>
        <div className={SC.vuefesImg}>
          <img alt="Vue Fes" src="../../images/vuefes.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Portrait
