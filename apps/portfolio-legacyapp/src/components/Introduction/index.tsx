import { t } from 'i18next'
import { Typography } from '@org/shared/ui'

const IntroductionSection: FC = () => {
  return (
    <div className="section">
      <Typography variant="subtitle 1">{t('labels.basic_info')}</Typography>
      <Typography variant="body 1">{t('basic_biography')}</Typography>
    </div>
  )
}

export default IntroductionSection
