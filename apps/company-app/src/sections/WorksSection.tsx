import i18next from 'i18next'
import { docsForExternal } from '@org/data'
import { LinkPreview } from '@org/shared/ui'

const WorksSection = () => {
  return (
    <section id="works">
      <h2 className="section__title">{i18next.t('works') as string}</h2>
      <p>{i18next.t('works_description') as string}</p>
      <div>
        {docsForExternal.map((work, index) => {
          return (
            <div key={index}>
              <h3>{work.text}</h3>
              <LinkPreview
                title={i18next.exists(work.text) ? i18next.t(work.text) : work.text}
                description={i18next.t(work.description)}
                url={work.url}
                image={work.image || ''}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorksSection
