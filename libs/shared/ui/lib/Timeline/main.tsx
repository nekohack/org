import { Timeline as TimelineWrap } from './index'
import { Card } from './Card'
import { CardHeader } from './CardHeader'

export type { TimelineProps } from './index'
export type { CardProps } from './Card'
export type { CardHeaderProps } from './CardHeader'

export const Timeline = Object.assign(TimelineWrap, {
  Card,
  CardHeader,
})
