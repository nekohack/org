import * as React from 'react'
import i18next from 'i18next'
import { LinkPreview } from '@org/shared/ui'
import { works } from '../data/works'

const WorksSection = () => {
  return (
    <section id="works">
      <h2 className="section__title">{i18next.t('works') as string}</h2>
      <p>{i18next.t('works_description') as string}</p>
      <div>
        {works.map((work, index) => {
          return (
            <div key={index}>
              <h3>{work.title}</h3>
              <LinkPreview
                title={work.title}
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
