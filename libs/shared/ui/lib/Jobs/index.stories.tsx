import { Story, Meta } from '@storybook/react'
import { Jobs, JobsProps } from './index'
import data from '../../../data/lib/json/jobs.json'
import React from 'react'

export default {
  component: Jobs,
  title: 'Jobs',
  args: {
    data: data,
  },
} as Meta

export const Default: Story<JobsProps> = (args) => <Jobs {...args} />
