import { Story, Meta } from '@storybook/react'
import { Timeline, TimelineProps } from './index'
import { talks, timelines } from '../../../data/lib/legacy/activity.constants'
import React from 'react'
import { Typography } from '../Typography/Typography'

export default {
  component: Timeline,
  title: 'Timeline',
} as Meta

export const Default: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    {timelines.map((t, index) => (
      <Timeline.Card key={index} title={t.title} date={t.date}>
        <div className="text-gray-300">
          <Typography variant="body 3">{t.description}</Typography>
        </div>
      </Timeline.Card>
    ))}
  </Timeline>
)

export const Alternate: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    {talks.map((t, index) => (
      <Timeline.Card key={index} title={t.title} date={t.date} alternate={index % 2 === 0}>
        <div className="text-gray-300">
          <Typography variant="body 3">{t.host}</Typography>
        </div>
      </Timeline.Card>
    ))}
  </Timeline>
)
