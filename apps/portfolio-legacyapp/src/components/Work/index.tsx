import { t } from 'i18next'
import { links, jobs as _jobs } from '@org/shared/data'
import { Job, LinkText, List, Typography } from '@org/shared/ui'
import { JOB as jobFeature, WORK as workFeature } from '@utils/feature.constants'
import { Fragment } from 'react'

const WorkSection: FC = () => {
  const jobs = Object.entries(_jobs)
    .map(([type, value]) => {
      return value.map((v) => ({
        type,
        ...v,
      }))
    })
    .flat()

  return (
    <div className="section">
      {workFeature && (
        <Fragment>
          <Typography variant="subtitle 2">{`${t('work')}`}</Typography>
          <Typography variant="body 2">{`${t('work_experience')}`}</Typography>
          <List title={`${t('labels.related_links')}`}>
            {links
              .filter((node) => node.enabled === true)
              .map((node, i) => {
                return (
                  <List.Item
                    key={i}
                    label={
                      <LinkText ariaLabel={t(node.text)} url={node.url}>
                        {`${t(node.text)}`}
                      </LinkText>
                    }
                  />
                )
              })}
          </List>
        </Fragment>
      )}
      {jobFeature && (
        <Fragment>
          <Typography variant="subtitle 2">{t('job_timeline')}</Typography>
          <Typography variant="body 2">{t('job_timeline_description')}</Typography>
          <Job headerColor="gray-500" color="gray-300" borderColor="gray-500">
            {jobs.map((j, index) => (
              <Job.Item key={index} {...j} description={`${j.position}: ${j.comment}`} />
            ))}
          </Job>
        </Fragment>
      )}
    </div>
  )
}

export default WorkSection
