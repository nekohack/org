import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react'
import { Typography, TypographyProps } from './Typography'

export default {
  component: Typography,
  title: 'Typography',
  args: {
    variant: 'title 1',
  },
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
    <Typography {...args} variant="body 1">
      H5
    </Typography>
    <Typography {...args} variant="body 2">
      H6
    </Typography>
    <Typography {...args} variant="body 3">
      P
    </Typography>
  </Fragment>
)
