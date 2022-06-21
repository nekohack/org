import React, { FC } from 'react'
import i18next from 'i18next'
import { links } from '@utils/link.constants'

const Work: FC = () => {
  return (
    <div className="section">
      <h1>{i18next.t('work')}</h1>
      <p>{i18next.t('work_experience')}</p>
      <h2>{i18next.t('labels.related_links')}</h2>
      <ul>
        {links
          .filter((node: any) => node.enabled === true)
          .map((node: any, index: number) => {
            return (
              <li key={index}>
                <a
                  href={node.url}
                  role="button"
                  aria-pressed="true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {i18next.t(node.text)}
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Work
