import { Story, Meta } from '@storybook/react'
import { Icon, IconProps } from './Icon'
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
    <Icon {...args} name="contact" />
    <Icon {...args} name="github" />
    <Icon {...args} name="person" />
    <Icon {...args} name="twitter" />
  </Fragment>
)
