import { Story, Meta } from '@storybook/react'
import { LinkText, LinkTextProps } from './LinkText'

export default {
  component: LinkText,
  title: 'LinkText',
  args: {
    ariaLabel: 'ブログ',
    url: 'https://blog.nekohack.me/',
  },
} as Meta

export const Default: Story<LinkTextProps> = (args) => <LinkText {...args}>ブログ</LinkText>
