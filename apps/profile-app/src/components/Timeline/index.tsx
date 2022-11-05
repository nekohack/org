import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import i18next from 'i18next'
import { timelines } from '@org/data'
import { ArrowDown } from '@org/shared/ui'
import * as SC from './index.module.scss'

const classes = (...args: string[]): string => {
  return args.join(' ')
}

const TimelineSection: FC = () => {
  const [viewOlderText, setViewOlderText] = React.useState<string>('View All')
  const [length, setLength] = React.useState<number>(7)

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
      <h2 className="section__title">{i18next.t('timeline')}</h2>
      <p>{i18next.t('timeline_description')}</p>
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
                  <h3>{i18next.exists(item.title) ? i18next.t(item.title) : item.title}</h3>

                  <p data-tip data-for={`timeline-item-${idx}`}>
                    {item.date}
                  </p>

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
                    <img
                      alt={item.title}
                      src={`/og/${item.imageName}.jpg`}
                      width={150}
                      height={100}
                      decoding="async"
                    />
                  )}
                  {item.imageUrl && (
                    <img
                      alt={item.title}
                      src={item.imageUrl}
                      width={150}
                      height={100}
                      decoding="async"
                    />
                  )}
                  {item.description && i18next.exists(item.description) ? (
                    <span>{i18next.t(item.description)}</span>
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
          <ArrowDown style={{ transform: viewOlderText === 'View less' ? 'rotate(180deg)' : '' }} />
        </button>
      </div>
    </section>
  )
}

export default TimelineSection
