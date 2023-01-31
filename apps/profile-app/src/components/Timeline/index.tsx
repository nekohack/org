import { t } from 'i18next'
import { Timeline as TimelineTypes } from '@org/shared/types'
import { timelines } from '@org/shared/data'
import { Timeline, Typography } from '@org/shared/ui'

const TimelineSection: FC = () => {
  return (
    <section id="timeline">
      <Typography variant="subtitle 2">{t('timeline')}</Typography>
      <Typography variant="body 2">{t('timeline_description')}</Typography>
      <div className="section-wrapper">
        <Timeline<TimelineTypes>
          data={timelines}
          keyObj={{ primaryLeft: 'title', primaryRight: 'date', secondary: 'description' }}
          alternate
        />
      </div>
    </section>
  )
}

export default TimelineSection
