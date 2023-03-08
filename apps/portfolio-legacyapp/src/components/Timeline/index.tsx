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
              <div className="p-2 sm:p-4 rounded-lg border shadow-sm bg-gray-700 border-gray-600 text-gray-300">
                <div className="justify-between mb-3 sm:flex items-baseline gap-2">
                  <div className="text-sm font-normal flex-1">{t.title}</div>
                  <time className="mb-1 text-xs font-normal sm:order-last sm:mb-0 block">
                    {t.fullDate}
                  </time>
                </div>
                <div className="text-gray-300">
                  <Typography variant="body 3">{t.description}</Typography>
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
