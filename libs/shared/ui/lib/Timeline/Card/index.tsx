import React from 'react'
import * as styles from './index.styles'

export interface CardProps {
  //
}

export function Card(props: React.PropsWithChildren<CardProps>) {
  const { children } = props
  return (
    <div className="mt-4 flex gap-5 break-all">
      <div className="flex-1">
        <p className="text-gray-100 text-xs">{children}</p>
      </div>
    </div>
  )
}
