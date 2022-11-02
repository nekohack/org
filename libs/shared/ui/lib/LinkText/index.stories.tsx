import { Story, Meta } from '@storybook/react'
import { LinkText, LinkTextProps } from './index'

export default {
  component: LinkText,
  title: 'LinkText',
} as Meta

const Template: Story<LinkTextProps> = (args) => <LinkText {...args}>Test</LinkText>

export const Primary = Template.bind({})
Primary.args = {
  name: 'Test',
  url: 'https://webneko.dev/',
}
