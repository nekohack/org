import { Story, Meta } from '@storybook/react'
import { Job, JobProps } from './Job'
import data from '../../../data/lib/json/jobs.json'
import React from 'react'

export default {
  component: Job,
  title: 'Job',
  args: {
    data: data,
  },
} as Meta

export const Default: Story<JobProps> = (args) => <Job {...args} />
