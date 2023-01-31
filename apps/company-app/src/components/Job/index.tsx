import { t } from 'i18next'
import { jobs } from '@org/shared/data'
import { Jobs, Typography } from '@org/shared/ui'

const JobSection: FC = () => {
  return (
    <section id="job_timeline">
      <Typography variant="subtitle 2">{`${t('job_timeline')}`}</Typography>
      <Typography variant="body 2">{`${t('job_timeline_description')}`}</Typography>
      <div className="section-wrapper">
        <Jobs data={jobs} />
      </div>
    </section>
  )
}

export default JobSection
