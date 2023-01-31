import { t } from 'i18next'
import { Talk as TalkTypes } from '@org/shared/types'
import { talks } from '@org/shared/data'
import { Timeline, Typography } from '@org/shared/ui'

const SlideSection: FC = () => {
  return (
    <section className="section">
      <Typography variant="subtitle 1">{t('slide')}</Typography>
      <div className="section-wrapper">
        <Timeline<TalkTypes>
          data={talks}
          keyObj={{ primaryLeft: 'title', primaryRight: 'date', secondary: 'host' }}
        />
      </div>
    </section>
  )
}

export default SlideSection
