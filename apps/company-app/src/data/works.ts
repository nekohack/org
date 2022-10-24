export interface WorkItem {
  title: string
  description: string
  url: string
  image: string
}

export const works: WorkItem[] = [
  {
    title: 'Tech Blog',
    description: 'tech_blog',
    url: 'https://blog.nekohack.me/',
    image: 'webneko-blog',
  },
  {
    title: 'EventIn',
    description: 'eventin',
    url: 'https://jp.vcube.com/eventdx/eventin',
    image: 'eventin',
  },
]
