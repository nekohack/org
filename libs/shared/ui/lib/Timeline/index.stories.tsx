import { Story, Meta } from '@storybook/react'
import { Timeline, TimelineProps } from './index'
import { Timeline as TimelineTypes } from '../../../types/index'
import data from '../../../data/lib/json/activities.json'
import React from 'react'

export default {
  component: Timeline,
  title: 'Timeline',
  args: {
    data: data.timelines,
  },
} as Meta

export const Default: Story<TimelineProps<TimelineTypes>> = (args) => (
  <div className="bg-slate-700 rounded-lg shadow-lg">
    <Timeline<TimelineTypes> {...args} />
  </div>
)

export const Alternate: Story<TimelineProps<TimelineTypes>> = (args) => (
  <div className="bg-slate-700 rounded-lg shadow-lg">
    <Timeline<TimelineTypes> {...args} alternate />
  </div>
)
