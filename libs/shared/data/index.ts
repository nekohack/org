export { technologies } from './lib/technology.constants'

// Legacy
import { talks, timelines as _timelines } from './lib/legacy/constants'
export const timelines = [
  ..._timelines.map((timeline) => ({
    date: timeline.date,
    title: timeline.title,
    description: timeline.description,
    url: timeline.url,
    type: 'timeline',
  })),
  ...talks.map((talk) => ({
    date: talk.date,
    title: talk.title,
    description: talk.description,
    url: talk.url,
    type: 'talk',
  })),
]
  .filter((d) => new Date(d.date).getFullYear() > new Date().getFullYear() - 2)
  .sort((a, b) => (a.date > b.date ? -1 : 1))
export { communities, jobs } from './lib/legacy/constants'
export { projects, links, socialLinks } from './lib/legacy/link.constants'
export { products } from './lib/legacy/product.constants'
