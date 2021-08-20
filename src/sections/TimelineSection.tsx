import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import { ArrowDown } from '@components/Icons/ArrowDown'
import styles from 'css/timeline.module.scss'
import { classes } from '@lib/classes'
import timeline from '../data/timeline'

const TimelineSection = () => {
  const [viewOlderText, setViewOlderText] = React.useState<string>('View All')
  const [length, setLength] = React.useState<number>(7)

  function showMore() {
    if (length > 7) {
      setLength(7)
      setViewOlderText('View All')
    } else {
      setLength(() => timeline.length)
      setViewOlderText('View less')
    }
  }

  return (
    <section id="timeline">
      <h1 className="section__title">Timeline</h1>
      <div className={styles.timeline}>
        {timeline.slice(0, length).map((item, idx: number) => {
          const side = idx % 2 === 0 ? styles.left : styles.right

          return (
            <div key={idx} className={classes(styles.timelineItem, side)}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                className={styles.timelineItemBody}
              >
                <header className={styles.timelineItemHeader}>
                  <h1>{item.title}</h1>

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
                {item.description}
              </a>
            </div>
          )
        })}

        <button onClick={showMore} className={styles.viewOlderBtn}>
          {viewOlderText}
          <ArrowDown style={{ transform: viewOlderText === 'View less' ? 'rotate(180deg)' : '' }} />
        </button>
      </div>
    </section>
  )
}

export default TimelineSection
