import { Timeline as TimelineWrap } from './Timeline'
import { Card } from './Card'

export type { TimelineProps } from './Timeline'
export type { CardProps } from './Card'

export const Timeline = Object.assign(TimelineWrap, {
  Card,
})
