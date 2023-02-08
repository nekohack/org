import { t } from 'i18next'
import { jobs } from '@org/shared/data'
import { Job, Typography } from '@org/shared/ui'

const JobSection: FC = () => {
  return (
    <section id="timeline">
      <Typography variant="subtitle 2">{t('job_timeline')}</Typography>
      <Typography variant="body 2">{t('job_timeline_description')}</Typography>
      <div className="section-wrapper">
        <Job data={jobs} />
      </div>
    </section>
  )
}

export default JobSection
