import * as React from 'react'
import i18next from 'i18next'
import { LinkPreview } from '@org/shared/ui'
import { works } from '../data/works'

const WorksSection = () => {
  return (
    <section id="works">
      <h1 className="section__title">{i18next.t('works') as string}</h1>
      <p>{i18next.t('works_description') as string}</p>
      <div>
        {works.map((work, index) => {
          return (
            <div key={index}>
              <h2>{work.title}</h2>
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
