import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LinkPreview, LinkPreviewProps } from './LinkPreview'

export default {
  component: LinkPreview,
  title: 'LinkPreview',
  args: {
    title: 'Vue Fes Japan Online 2022',
    description:
      '年に一度の大規模カンファレンス “Vue Fes Japan” の運営や、Vue.js 公式ドキュメントの日本語翻訳をはじめ、日本における Vue.js の普及と、Vue.js エコシステムへの貢献を行っている日本最大の Vue.js コミュニティです。',
    url: 'https://vuefes.jp/2022',
    image: 'https://i.imgur.com/IFYXj64.png',
  },
} as Meta

export const Default: Story<LinkPreviewProps> = (args) => <LinkPreview {...args} />
