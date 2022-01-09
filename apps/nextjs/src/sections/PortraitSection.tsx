import * as React from 'react'
import i18next from 'i18next'
import styles from 'css/portrait.module.scss'

const PortraitSection = () => {
  return (
    <section id="hobbies">
      <h1 className="section__title">{i18next.t('portrait')}</h1>
      <p>{i18next.t('portrait_description')}</p>
      <div className={styles.photosContainer}>
        <div className={styles.standingImg}>
          <img alt="Standing photo" src="/images/v-kansai_10.jpg" />
        </div>
        <div className={styles.vuefesImg}>
          <img alt="Vuefes photo" src="/images/vuefes.jpg" />
        </div>
      </div>
    </section>
  )
}

export default PortraitSection