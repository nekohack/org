import { useState } from 'react'
import { css } from '@emotion/react'
import { t } from 'i18next'
import { timelines } from '@org/shared/data'
import { CssResetButton, Icon, Timeline, Typography } from '@org/shared/ui'

const TimelineSection: FC = () => {
  const [length, setLength] = useState(7)
  const [status, setStatus] = useState<'View more' | 'View less'>('View more')

  function showMore() {
    if (length > 7) {
      setLength(7)
      setStatus('View more')
    } else {
      setLength(() => timelines.length)
      setStatus('View less')
    }
  }

  return (
    <section id="timeline">
      <Typography variant="subtitle 2">{t('timeline')}</Typography>
      <Typography variant="body 2">{t('timeline_description')}</Typography>
      <div className="section-wrapper">
        <Timeline>
          {timelines.slice(0, length).map((t, index) => (
            <Timeline.Card key={index}>
              <span className="flex absolute -left-11 justify-center items-center w-10 h-10 bg-slate-700 rounded-full text-lg border-gray-500 border-2">
                {t.type === 'timeline' && '📚'}
                {t.type === 'talk' && '🎙'}
              </span>
              <div className="ml-2">
                <div className="p-2 sm:p-4 rounded-lg border shadow-sm bg-gray-700 border-gray-600 text-gray-300">
                  <div className="justify-between mb-3 sm:flex items-baseline gap-2">
                    <div className="text-sm font-semibold text-blue-300">
                      {t.url && (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white hover:text-neutral-200 visited:text-white"
                        >
                          {t.title}
                        </a>
                      )}
                      {!t.url && <div className="text-white">{t.title}</div>}
                    </div>
                    <div className="text-sm font-semibold text-blue-300">
                      {`${new Date(t.date).getFullYear()}/${
                        new Date(t.date).getMonth() + 1
                      }/${new Date(t.date).getDay()}`}
                    </div>
                  </div>
                  <div className="text-gray-300">
                    <Typography variant="body 3">{t.description}</Typography>
                  </div>
                </div>
              </div>
            </Timeline.Card>
          ))}
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              button {
                cursor: pointer;
                background: none;
                border: none;
              }
            `}
          >
            <CssResetButton className="text-red-300" onClick={showMore}>
              <Typography variant="subtitle 3">{status}</Typography>
            </CssResetButton>
            {status === 'View more' && (
              <div className="text-gray-300">
                <Icon name="arrow-down" />
              </div>
            )}
          </div>
        </Timeline>
      </div>
    </section>
  )
}

export default TimelineSection
