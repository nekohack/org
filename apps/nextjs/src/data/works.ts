type Status = 'enabled' | 'archived'
type Image = 'webneko-blog' | 'eventin' | 'pos' | 'agentbank' | 'battlecats'

export interface WorkItem {
  title: string
  description: string
  status: Status
  url: string
  image: Image
}

export const works: WorkItem[] = [
  {
    title: 'Tech Blog',
    description: 'tech_blog',
    status: 'enabled',
    url: 'https://webneko.dev/',
    image: 'webneko-blog',
  },
  {
    title: 'EventIn',
    description: 'eventin',
    status: 'enabled',
    url: 'https://jp.vcube.com/eventdx/eventin',
    image: 'eventin',
  },
  {
    title: 'Smaregi POS',
    description: 'pos',
    status: 'enabled',
    url: 'https://jp.vcube.com/eventdx/eventin',
    image: 'pos',
  },
]
