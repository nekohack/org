import React from 'react'
import { LinkText } from './LinkText'

export default {
  component: LinkText,
  title: 'LinkText',
  args: {
    ariaLabel: 'ブログ',
    url: 'https://blog.nekohack.me/',
  },
}

export const Default = (args) => <LinkText {...args}>ブログ</LinkText>
