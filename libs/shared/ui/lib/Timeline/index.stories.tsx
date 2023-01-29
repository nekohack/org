import { Story, Meta } from '@storybook/react'
import { Timeline, TimelineProps } from './index'
import data from '../../../data/lib/json/activities.json'
import React from 'react'

export default {
  component: Timeline,
  title: 'Timeline',
  args: {
    data: data.timelines,
  },
} as Meta

export const Default: Story<TimelineProps> = (args) => (
  <div className="bg-slate-700 rounded-lg shadow-lg">
    <Timeline {...args} />
  </div>
)
