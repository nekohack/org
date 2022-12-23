type Status = 'active' | 'inactive' | 'archived'

type Category =
  | 'Build Tools'
  | 'CLI'
  | 'IDE'
  | 'Language'
  | 'Cross Platform Framework'
  | 'Scala Framework'
  | 'PHP Framework'
  | 'JavaScript Framework'
  | 'JavaScript Library'
  | 'State management'
  | 'Design System'
  | 'CI'
  | 'Database'
  | 'CMS'
  | 'Headless CMS'
  | 'API'
  | 'Serverless'
  | 'Static Website Hosting'
  | 'Container'
  | 'CDN'

type Host =
  | 'DevRel Meetup Tokyo'
  | 'Flutter Japan User Group'
  | 'JAWS UG'
  | 'LINE Developer Community'
  | 'me'
  | 'microCMS'
  | 'necco inc.'
  | 'PWA Night'
  | 'v-kansai'
  | 'v-okinawa'
  | 'VR Study'
  | 'VS Code Meetup'
  | 'Yumemi inc.'
  | 'SOFTWARE DESIGN'

type Place = 'Writing' | 'EventIn' | 'Meet' | 'YouTube' | 'Zoom'
type RealPlace = 'Moneyforward' | 'necco inc.' | 'Yumemi inc.'

export interface Technology {
  title: string
  skills: Skill[]
}

export interface Skill {
  name: string
  category: Category
  status: Status
}

export interface Repo {
  name: string
  url: string
  status: Status
}

export interface Product {
  title: string[]
  description: string[]
  url: string[]
  image?: string[]
  skills?: Skill[]
  repos?: Repo[]
  sub?: Array<{ title: string; skills: Skill[] }>
  enabled: boolean
}

export interface Link {
  text: string
  description?: string
  url: string
  enabled: boolean
  image?: string
}

export interface Community {
  text: string
  url: string
  status: Status
  enabled: boolean
}

export interface Talk {
  text: string
  host: Host
  url: string | undefined
  youtubeUrl: string | null
  place: Place | RealPlace
  image: string | undefined
  date: string
  enabled: boolean
}

export interface Timeline {
  date: string
  full_date?: string // eg: March 28, 2021
  title: string
  description?: string
  imageName?: string
  imageUrl?: string
  url?: string
}
