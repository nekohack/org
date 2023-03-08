import React from 'react'
import * as styles from './Timeline.styles'

export interface TimelineProps {
  //
}

export function Timeline(props: React.PropsWithChildren<TimelineProps>) {
  const { children } = props
  const childItems = React.Children.toArray(children)

  return (
    <ul className="relative border-l border-gray-500">
      {childItems.map((child, index) => (
        <li key={index} className="mb-10 ml-6 relative">
          {child}
        </li>
      ))}
    </ul>
  )
}
