import { t } from 'i18next'
import { Typography } from '@org/shared/ui'
import * as SC from './index.module.scss'

const PortraitSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('portrait')}</Typography>
      <Typography variant="body 1">{t('portrait_description')}</Typography>
      <div className={SC.photosContainer}>
        <div className={SC.standingImg}>
          <img alt="" src="/images/v-kansai_10.jpg" />
        </div>
        <div className={SC.vuefesImg}>
          <img alt="" src="/images/vuefes.jpg" />
        </div>
      </div>
    </div>
  )
}

export default PortraitSection
