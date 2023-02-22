import React from 'react'
import { Fragment } from 'react'
import { Typography } from '../Typography/Typography'
import * as styles from './List.styles'

export interface ListProps {
  title: string
}

export function List(props: React.PropsWithChildren<ListProps>) {
  const { children, title } = props
  const childItems = React.Children.toArray(children)

  return (
    <Fragment>
      <div css={styles.headerLabel}>
        <div css={styles.headerLabelItem}>
          <Typography variant="subtitle 2">{title}</Typography>
        </div>
      </div>
      <ul css={styles.list}>
        {childItems.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </Fragment>
  )
}
