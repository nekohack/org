import { useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { exists, t } from 'i18next'
import { timelines } from '@org/shared/data'
import { Icon, Typography } from '@org/shared/ui'
import * as SC from './index.module.scss'

const classes = (...args: string[]): string => {
  return args.join(' ')
}

const TimelineSection: FC = () => {
  const [viewOlderText, setViewOlderText] = useState<string>('View All')
  const [length, setLength] = useState<number>(7)

  function showMore() {
    if (length > 7) {
      setLength(7)
      setViewOlderText('View All')
    } else {
      setLength(() => timelines.length)
      setViewOlderText('View less')
    }
  }

  return (
    <section id="timeline">
      <Typography variant="subtitle 2">{t('timeline')}</Typography>
      <Typography variant="body 2">{t('timeline_description')}</Typography>
      <div className={SC.timeline}>
        {timelines.slice(0, length).map((item, idx: number) => {
          const side = idx % 2 === 0 ? SC.left : SC.right

          return (
            <div key={idx} className={classes(SC.timelineItem, side)}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                className={SC.timelineItemBody}
              >
                <header className={SC.timelineItemHeader}>
                  <Typography variant="body 2">
                    {exists(item.title) ? t(item.title) : item.title}
                  </Typography>

                  <Typography variant="body 3" data-tip data-for={`timeline-item-${idx}`}>
                    {item.date}
                  </Typography>

                  {item.full_date ? (
                    <ReactTooltip
                      id={`timeline-item-${idx}`}
                      place="top"
                      effect="solid"
                      className="tooltip-overwrite"
                      offset={{ top: 10 }}
                      arrowColor="transparent"
                    >
                      {item.full_date}
                    </ReactTooltip>
                  ) : null}
                </header>
                <div className={SC.timelineItemDetail}>
                  {item.imageName && (
                    <img alt="" src={`/og/${item.imageName}.jpg`} width={150} height={100} />
                  )}
                  {item.imageUrl && <img alt="" src={item.imageUrl} width={150} height={100} />}
                  {item.description && exists(item.description) ? (
                    <Typography variant="body 3">{t(item.description)}</Typography>
                  ) : (
                    item.description
                  )}
                </div>
              </a>
            </div>
          )
        })}

        <button onClick={showMore} className={SC.viewOlderBtn}>
          {viewOlderText}
          <Icon name="arrow-down" />
        </button>
      </div>
    </section>
  )
}

export default TimelineSection
