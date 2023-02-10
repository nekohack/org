import { t } from 'i18next'
import { jobs as _jobs } from '@org/shared/data'
import { Job, Typography } from '@org/shared/ui'

const JobSection: FC = () => {
  const jobs = Object.entries(_jobs)
    .map(([type, value]) => {
      return value.map((v) => ({
        type,
        ...v,
      }))
    })
    .flat()

  return (
    <section id="timeline">
      <Typography variant="subtitle 2">{t('job_timeline')}</Typography>
      <Typography variant="body 2">{t('job_timeline_description')}</Typography>
      <div className="section-wrapper">
        <Job>
          {jobs.map((j, index) => (
            <Job.Item key={index} {...j} description={`${j.position}: ${j.comment}`} />
          ))}
        </Job>
      </div>
    </section>
  )
}

export default JobSection
