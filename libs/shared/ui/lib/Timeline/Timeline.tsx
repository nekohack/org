import React from 'react'
import * as styles from './Timeline.styles'

export interface TimelineProps {
  //
}

export function Timeline(props: React.PropsWithChildren<TimelineProps>) {
  const { children } = props
  const childItems = React.Children.toArray(children)

  return (
    <ul css={styles.root}>
      {childItems.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  )
}
