import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import i18next from 'i18next'
import { ArrowDown } from '@components/Icons/ArrowDown'
import * as SC from './index.module.scss'

interface TimelineItem {
  date: string
  full_date?: string // eg: March 28, 2021
  title: string
  description?: string
  imageName?: string
  imageUrl?: string
  url?: string
}

const classes = (...args: string[]): string => {
  return args.join(' ')
}

const Timeline = () => {
  const timeline: TimelineItem[] = [
    {
      date: 'October 2021',
      title: i18next.t('created_the_ohayo_website'),
      description: i18next.t('created_the_ohayo_website_in_memo'),
      url: 'https://ohayo.nekohack.me/',
    },
    {
      date: 'July 2021',
      title: i18next.t('created_vscodecon_jp_2021_website'),
      description: i18next.t('created_vscodecon_jp_2021_website_in_memo'),
      // imageName: 'vscodejpcon-2021',
      // imageUrl: 'https://i.imgur.com/fOyWXX2.jpg',
      url: 'https://vscodejp.github.io/conf2021',
    },
    {
      date: 'June 2021',
      title: i18next.t('worked_vcube_eventin'),
    },
    {
      date: 'May 2021',
      title: i18next.t('start_ohayo_engineer_on_twitter_spaces'),
      description: i18next.t('start_ohayo_engineer_on_twitter_spaces_in_memo'),
    },
    {
      date: 'April 2021',
      title: i18next.t('created_flutterkaigi_2021_website'),
      description: i18next.t('created_flutterkaigi_2021_website_in_memo'),
      // imageUrl: 'https://i.imgur.com/9xFIDzQ.jpg',
      url: 'https://flutterkaigi.jp',
    },
    {
      date: 'Spring 2021',
      title: i18next.t('finish_the_dormant_period'),
      description: i18next.t('finish_the_dormant_period_in_memo'),
    },
    {
      date: 'Spring 2020',
      title: i18next.t('start_the_dormant_period'),
      description: i18next.t('start_the_dormant_period_in_memo'),
    },
    {
      date: 'February 2020',
      title: i18next.t('created_a_profile_website'),
      description: i18next.t('created_a_profile_website_in_memo'),
      // imageName: 'yuma_kitamura-nekohack-me',
      // imageUrl: 'https://i.imgur.com/sN5nHoS.jpg',
      url: 'https://yuma-kitamura.nekohack.me',
    },
    {
      date: 'February 2020',
      title: i18next.t('worked_smaregi_app_market'),
      description: i18next.t('worked_smaregi_app_market_in_memo'),
    },
    {
      date: 'November 2019',
      full_date: 'November 30, 2019',
      title: i18next.t('participated_in_js_conf_jp_2019'),
    },
    {
      date: 'November 2019',
      full_date: 'November 16, 2019',
      title: i18next.t('participated_in_fec_fukuoka_2019'),
      description: i18next.t('participated_in_fec_fukuoka_2019_in_memo'),
    },
    {
      date: 'November 2019',
      full_date: 'November 2, 2019',
      title: i18next.t('participated_in_front_kansai_2019'),
      description: i18next.t('participated_in_front_kansai_2019_in_memo'),
    },
    {
      date: 'October 2019',
      title: i18next.t('started_to_consider_dev_rel'),
      description: i18next.t('started_to_consider_dev_rel_in_memo'),
    },
    {
      date: 'July 2019',
      title: i18next.t('improved_smaregi_pos'),
      description: i18next.t('improved_smaregi_pos_in_memo'),
    },
    {
      date: 'February 2019',
      title: i18next.t('worked_roxx_agent_bank'),
      description: i18next.t('worked_roxx_agent_bank_in_memo'),
    },
    {
      date: 'November 2018',
      full_date: 'November 3, 2018',
      title: i18next.t('participated_in_vue_fes_japan_2018'),
      url: 'https://vuefes.jp/2018',
    },
    {
      date: 'September 2018',
      title: i18next.t('created_a_technical_blog'),
      description: i18next.t('created_a_technical_blog_in_memo'),
      // imageName: 'webneko-blog',
      // imageUrl: 'https://i.imgur.com/xuj6KVU.jpg',
      url: 'https://webneko.dev',
    },
    {
      date: 'May 2017',
      full_date: 'May 8, 2017',
      title: i18next.t('participated_in_unite_tokyo_2017'),
      description: i18next.t('participated_in_unite_tokyo_2017_in_memo'),
    },
    {
      date: 'October 2016',
      title: i18next.t('worked_ponos_namesta'),
      imageUrl: 'https://i.imgur.com/Cb9sWiz.jpg',
    },
    {
      date: 'January 2016',
      title: i18next.t('improved_ponos_battlecats'),
      imageUrl: 'https://i.imgur.com/WAvevMW.jpg',
    },
    {
      date: 'November 2014',
      full_date: 'November 10, 2014',
      title: i18next.t('started_github'),
    },
    {
      date: 'October 2014',
      title: i18next.t('worked_the_remote_viewing_app'),
      description: i18next.t('worked_the_remote_viewing_app_in_memo'),
    },
    {
      date: 'Summer 2014',
      title: 'Tokyo >>> Osaka',
      description: 'Moved back to Osaka.',
    },
  ]

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
      <h1 className="section__title">{i18next.t('timeline')}</h1>
      <p>{i18next.t('timeline_description')}</p>
      <div className={SC.timeline}>
        {timeline.slice(0, length).map((item, idx: number) => {
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
                  {item.description && <span>{item.description}</span>}
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

export default Timeline
