import React from 'react'
import { CardHeader } from '../CardHeader'
import * as styles from './index.styles'

export interface CardProps {
  placement: 'left' | 'right'
  title: string
  date: string
}

export function Card(props: React.PropsWithChildren<CardProps>) {
  const { children, placement, title, date } = props
  return (
    <div css={styles.root(placement)} className="bg-slate-800 rounded-lg text-gray-300 shadow-lg">
      <CardHeader title={title} date={date} />
      {children}
    </div>
  )
}
