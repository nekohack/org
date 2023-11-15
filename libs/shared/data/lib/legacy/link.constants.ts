import { Link, SocialLink } from '@org/shared/types'

export const projects: Link[] = [
  {
    text: 'Tech Blog',
    description: 'tech_blog',
    url: 'https://blog.nekohack.me/',
    enabled: true,
    image: 'webneko-blog',
  },
  {
    text: 'EventIn',
    description: 'eventin',
    url: 'https://jp.vcube.com/eventdx/eventin',
    enabled: true,
    image: 'eventin',
  },
]

export const links: Link[] = [
  {
    text: 'labels.curriculum_vitae',
    url: 'https://github.com/jiyuujin/Curriculum-Vitae',
    enabled: true,
  },
  {
    text: 'about_me',
    url: 'https://slides.com/jiyuujin/about-me',
    enabled: true,
  },
  {
    text: 'skill_set_coming_soon',
    url: 'https://scrapbox.io/nekohack/skillset',
    enabled: true,
  },
]

export const socialLinks: SocialLink[] = [
  {
    text: 'email',
    description: 'Contact',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfFzwsCVnFbu-lV0Jz2fEYHR97hpBSK2g6kEwc-G1fo976ngA/viewform',
    enabled: true,
  },
  {
    text: 'github',
    description: 'GitHub',
    url: 'https://github.com/jiyuujin',
    enabled: true,
  },
  {
    text: 'mastodon',
    description: 'Mastodon',
    url: 'https://times.nekohack.me/@admin',
    enabled: true,
  },
  {
    text: 'bluesky',
    description: 'Bluesky',
    url: 'https://bsky.app/profile/jiyuujin.bsky.social',
    enabled: true,
  },
  {
    text: 'x_twitter',
    description: 'X (Twitter)',
    url: 'https://x.com/jiyuujinlab',
    enabled: true,
  },
]
