import React, { FC } from 'react'
import i18next from 'i18next'
import dayjs from 'dayjs'
import { talks } from '@utils/talk.constants'

const Slide: FC = () => {
  const dateFormat = (d: string) => {
    return dayjs(new Date(d)).format('YYYY年MM月DD日')
  }

  return (
    <div className="section">
      <h1>{i18next.t('slide')}</h1>
      <ul>
        {talks
          .filter((node: any) => node.enabled === true)
          .map((node: any, index: number) => {
            return (
              <li key={index}>
                <p>{dateFormat(node.date)}</p>
                <p style={{ display: 'flex', flexDirection: 'column', verticalAlign: 'middle' }}>
                  {node.host}
                  <a
                    href={node.url}
                    role="button"
                    aria-pressed="true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {i18next.t(node.text)}
                  </a>
                  {node.youtubeUrl && (
                    <>
                      <a
                        href={node.youtubeUrl}
                        role="button"
                        aria-pressed="true"
                        style={{ display: 'flex', justifyContent: 'flex-start' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {i18next.t('labels.youtube_live')}
                      </a>
                    </>
                  )}
                </p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Slide
