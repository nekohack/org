import { Story, Meta } from '@storybook/react'
import { Timeline, TimelineProps } from './index'
import { timelines } from '../../../data/lib/legacy/activity.constants'
import React from 'react'
import { Typography } from '../Typography/Typography'

export default {
  component: Timeline,
  title: 'Timeline',
} as Meta

export const Default: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    {timelines.map((t, index) => (
      <Timeline.Card key={index}>
        <div className="p-2 sm:p-4 rounded-lg border shadow-sm bg-gray-700 border-gray-600 text-gray-300">
          <div className="justify-between mb-3 sm:flex items-baseline gap-2">
            <div className="text-sm font-normal flex-1">{t.title}</div>
            <time className="mb-1 text-xs font-normal sm:order-last sm:mb-0 block">{t.date}</time>
          </div>
          <div className="text-gray-300">
            <Typography variant="body 3">{t.description}</Typography>
          </div>
        </div>
      </Timeline.Card>
    ))}
  </Timeline>
)
