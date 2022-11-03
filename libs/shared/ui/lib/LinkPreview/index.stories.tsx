import { Story, Meta } from '@storybook/react'
import { LinkPreview, LinkPreviewProps } from './index'

export default {
  component: LinkPreview,
  title: 'LinkPreview',
} as Meta

const Template: Story<LinkPreviewProps> = (args) => <LinkPreview {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Test',
  description: 'example',
  url: 'https://webneko.dev/',
  image: new URL('../../images/bakeneko2.png', import.meta.url).href,
}
