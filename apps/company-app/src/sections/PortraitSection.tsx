import i18next from 'i18next'
import styles from 'css/portrait.module.scss'

const PortraitSection: FC = () => {
  return (
    <section id="portrait">
      <h1 className="section__title">{i18next.t('portrait') as string}</h1>
      <p>{i18next.t('portrait_description') as string}</p>
      <div className={styles.photosContainer}>
        <div className={styles.standingImg}>
          <img alt="Standing" src="/images/v-kansai_10.jpg" />
        </div>
        <div className={styles.vuefesImg}>
          <img alt="Vue Fes" src="/images/vuefes.jpg" />
        </div>
      </div>
    </section>
  )
}

export default PortraitSection
