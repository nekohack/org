import React from 'react'
import { CardHeader } from '../CardHeader'
import * as styles from './index.styles'

export interface CardProps {
  title: string
  date: string
  alternate?: boolean
}

export function Card(props: React.PropsWithChildren<CardProps>) {
  const { children, title, date, alternate = undefined } = props
  return (
    <div
      css={[styles.item, alternate !== undefined && alternate ? styles.leftItem : styles.rightItem]}
    >
      <div
        css={styles.root(alternate !== undefined && alternate ? 'left' : 'right')}
        className="bg-slate-800 rounded-lg text-gray-300 shadow-lg"
      >
        <CardHeader title={title} date={date} />
        {children}
      </div>
    </div>
  )
}
