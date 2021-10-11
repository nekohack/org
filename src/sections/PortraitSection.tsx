import * as React from 'react'
import Image from 'next/image'
import i18next from 'i18next'
import styles from 'css/portrait.module.scss'
import VKansai10Img from '../../public/images/v-kansai_10.jpg'
import VuefesImg from '../../public/images/vuefes.jpg'

const PortraitSection = () => {
  return (
    <section id="hobbies">
      <h1 className="section__title">{i18next.t('portrait')}</h1>
      <p>{i18next.t('portrait_description')}</p>
      <div className={styles.photosContainer}>
        <div className={styles.standingImg}>
          <Image alt="Standing photo" src={VKansai10Img} />
        </div>
        <div className={styles.vuefesImg}>
          <Image alt="Vuefes photo" src={VuefesImg} />
        </div>
      </div>
    </section>
  )
}

export default PortraitSection
