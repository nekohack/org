import { Story, Meta } from '@storybook/react'
import { Icon, IconProps } from './index'
import { Fragment } from 'react'

export default {
  component: Icon,
  title: 'Icon',
  args: {
    name: 'arrow-down',
  },
} as Meta

export const Default: Story<IconProps> = (args) => (
  <Fragment>
    <Icon {...args} />
    <Icon name="contact" {...args} />
    <Icon name="github" {...args} />
    <Icon name="person" {...args} />
    <Icon name="twitter" {...args} />
  </Fragment>
)
