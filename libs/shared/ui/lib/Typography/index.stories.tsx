import { Story, Meta } from '@storybook/react'
import { Fragment } from 'react'
import { Typography, TypographyProps } from './index'

export default {
  component: Typography,
  title: 'Typography',
  args: {
    variant: 'title'
  }
} as Meta

export const Default: Story<TypographyProps> = (args) => (
  <Fragment>
    <Typography {...args}>H1</Typography>
    <Typography {...args} variant="subtitle 1">
      H2
    </Typography>
    <Typography {...args} variant="subtitle 2">
      H3
    </Typography>
    <Typography {...args} variant="subtitle 3">
      H4
    </Typography>
    <Typography {...args} variant="subtitle 4">
      H5
    </Typography>
    <Typography {...args} variant="subtitle 5">
      H6
    </Typography>
    <Typography {...args} variant="body">
      P
    </Typography>
  </Fragment>
)
