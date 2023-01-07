import { t } from 'i18next'
import { Typography } from '@org/shared/ui'
import styles from 'css/portrait.module.scss'

const PortraitSection: FC = () => {
  return (
    <section id="portrait">
      <Typography variant="subtitle 1">{`${t('portrait')}`}</Typography>
      <Typography variant="body 1">{`${t('portrait_description')}`}</Typography>
      <div className={styles.photosContainer}>
        <div className={styles.standingImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/v-kansai_10.jpg" />
        </div>
        <div className={styles.vuefesImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/images/vuefes.jpg" />
        </div>
      </div>
    </section>
  )
}

export default PortraitSection
