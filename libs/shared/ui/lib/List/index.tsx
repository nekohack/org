import React from 'react'
import { Fragment } from 'react'
import { Typography } from '../Typography/index'
import * as styles from './index.styles'

export interface ListProps {
  title: string
}

export function List(props: React.PropsWithChildren<ListProps>) {
  const { children, title } = props

  return (
    <Fragment>
      <div css={styles.headerLabel}>
        <Typography variant="subtitle 2" css={styles.headerLabelItem}>
          {title}
        </Typography>
      </div>
      <ul css={styles.list}>{children}</ul>
    </Fragment>
  )
}
