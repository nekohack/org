import i18next, { t } from 'i18next'
import { docsForExternal } from '@org/shared/data'
import { LinkPreview, Typography } from '@org/shared/ui'

const WorksSection = () => {
  return (
    <section id="works">
      <Typography variant="subtitle 1">{`${t('works')}`}</Typography>
      <Typography variant="body 1">{`${t('works_description')}`}</Typography>
      <div>
        {docsForExternal.map((work, index) => {
          return (
            <div key={index}>
              <Typography variant="subtitle 2">{work.text}</Typography>
              <LinkPreview
                title={i18next.exists(work.text) ? t(work.text) : work.text}
                description={t(work.description)}
                url={work.url}
                image={`/og/${work.image || ''}.jpg`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorksSection
