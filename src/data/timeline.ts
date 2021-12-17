import i18next from 'i18next'

interface TimelineItem {
  date: string
  full_date?: string // eg: March 28, 2021
  title: string
  description?: string
  imageName?: string
  imageUrl?: string
  url?: string
}

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
  },
  {
    date: 'November 2019',
    full_date: 'November 2, 2019',
    title: i18next.t('participated_in_front_kansai_2019'),
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
    imageName: 'webneko-blog',
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

export default timeline
