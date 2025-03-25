import { IconName } from './icon'

type Status = 'active' | 'inactive' | 'archived'

type Category =
  | 'Build Tools'
  | 'Build Tools (CSS-in-JS)'
  | 'CLI'
  | 'IDE'
  | 'Language'
  | 'Cross Platform Framework'
  | 'Scala/Java Framework'
  | 'PHP Framework'
  | 'JavaScript Framework'
  | 'JavaScript/React Framework'
  | 'JavaScript/Vue Framework'
  | 'JavaScript/Svelte Framework'
  | 'JavaScript Library'
  | 'State management'
  | 'Design System'
  | 'CI'
  | 'Database'
  | 'BaaS Tools'
  | 'CMS'
  | 'Headless CMS'
  | 'API'
  | 'Serverless'
  | 'Static Website Hosting'
  | 'Container'
  | 'CDN'
  | 'Design'

type Host =
  | 'DevRel Meetup Tokyo'
  | 'Flutter Meetup Osaka (Flutter Japan User Group)'
  | 'JAWS UG'
  | 'LINE Developer Community'
  | 'EDG'
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
type RealPlace = 'Moneyforward' | 'necco inc.' | 'Yumemi inc.' | 'コミュニティスペース 5.6' | 'SBI日本少額短期保険株式会社'

type Location = 'Kyoto' | 'Osaka' | 'Tokyo' | 'Japan'

type Twitter = 'jiyuujinlab' | 'FlutterKaigi' | 'linedc' | 'vscodejp' | 'vuejs-jp'

type Position = 'organizer' | 'contributor' | 'staff'

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
  title: string
  description: string
  urls: string[]
  shares: string[][]
  position: Position
  image?: string
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

export interface SocialLink extends Link {
  text: IconName
}

export interface Community {
  text: string
  location: string | Location
  url: string
  status: string | Status
  enabled: boolean
}

export interface Talk {
  title: string
  description: string
  host: Host | string // string を削除予定
  url: string | undefined
  youtubeUrl: string | undefined
  place: Place | RealPlace | string // string を削除予定
  image: string | undefined
  date: string
}

export interface Timeline {
  title: string
  description?: string
  date: string
  fullDate?: string // eg: March 28, 2021
  url?: string
  imageUrl?: string
}
