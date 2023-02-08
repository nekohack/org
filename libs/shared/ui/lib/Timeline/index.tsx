import { Timeline as TimelineWrap } from './Timeline'
import { Card } from './Card'
import { CardHeader } from './CardHeader'

export type { TimelineProps } from './Timeline'
export type { CardProps } from './Card'
export type { CardHeaderProps } from './CardHeader'

export const Timeline = Object.assign(TimelineWrap, {
  Card,
  CardHeader,
})
