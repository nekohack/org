interface TimelineItem {
  date: string
  full_date?: string // eg: March 28, 2021
  title: string
  description: string
  url?: string
}

const timeline: TimelineItem[] = [
  {
    date: 'Spring 2021',
    title: 'Gave up during the dormant period',
    description: 'Gradually resumed activities of tech communities.',
  },
  {
    date: 'Spring 2020',
    title: 'Started to take a dormant period',
    description: 'Minimized activities of tech communities.',
  },
  {
    date: 'February 2020',
    title: 'Created a profile website',
    description: 'Started to create a profile website.',
    url: 'https://yuma-kitamura.nekohack.me',
  },
  {
    date: 'February 2020',
    title: 'Worked Smaregi app market',
    description: 'Started to work on function development in Smaregi app market.',
  },
  {
    date: 'November 2019',
    full_date: 'November 30, 2019',
    title: 'Participated in JS Conf JP',
    description: 'Participated in JS Conf JP.',
  },
  {
    date: 'November 2019',
    full_date: 'November 16, 2019',
    title: 'Participated in Frontend Conference Fukuoka',
    description: 'Participated in Frontend Conference Fukuoka.',
  },
  {
    date: 'November 2019',
    full_date: 'November 2, 2019',
    title: 'Participated in Frontend Conference Kansai',
    description: 'Participated in Frontend Conference Kansai as a staff.',
  },
  {
    date: 'October 2019',
    title: 'Considered DevRel (Developer Relations)',
    description: 'Started to advise from perspective of HR, such as Human Resource.',
    url: 'https://yuma-kitamura.nekohack.me',
  },
  {
    date: 'July 2019',
    title: 'Improved Smaregi POS',
    description: 'Started to improve frontend on Smaregi POS.',
  },
  {
    date: 'February 2019',
    title: 'Worked AGENT BANK',
    description: 'Started to work on function development in AGENT BANK (old: SARDINE).',
  },
  {
    date: 'November 2018',
    full_date: 'November 3, 2018',
    title: 'Participated in Vue Fes Japan',
    description: 'Participated in Vue Fes Japan.',
    url: 'https://vuefes.jp/2018',
  },
  {
    date: 'September 2018',
    title: 'Created a technical blog',
    description: 'Started to create a technical blog.',
    url: 'https://webneko.dev',
  },
  {
    date: 'May 2017',
    full_date: 'May 8, 2017',
    title: 'Participated in Unite Tokyo',
    description: 'I personally participated in the first conference.',
  },
  {
    date: 'October 2016',
    title: 'Worked Namesta',
    description: 'Started to work on function development in Namesta.',
  },
  {
    date: 'January 2016',
    title: 'Improved Battlecats',
    description: 'Started to improve on function development in Battlecats.',
  },
  {
    date: 'November 2014',
    full_date: 'November 10, 2014',
    title: 'Start Github',
    description: 'Created Github account.',
  },
  {
    date: 'October 2014',
    title: 'Worked remote viewing app',
    description: 'Started to make a remote viewing app.',
  },
  {
    date: 'Summer 2014',
    title: 'Tokyo >>> Osaka',
    description: 'Moved back to Osaka.',
  },
]

export default timeline
