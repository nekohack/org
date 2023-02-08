import { useState } from 'react'
import { CssResetButton } from '../CssResetButton/CssResetButton'
import { Icon } from '../Icon/Icon'
import { Typography } from '../Typography/Typography'
import { Card } from './Card'
import * as styles from './index.styles'

type Keys = 'primaryLeft' | 'primaryRight' | 'secondary'
type KeyObj = { [key in Keys]: string }

export interface TimelineProps<T> {
  data: T[]
  keyObj: KeyObj
  alternate?: boolean
}

export function Timeline<T>({ data, keyObj, alternate }: TimelineProps<T>) {
  const { primaryLeft, primaryRight, secondary } = keyObj

  const [length, setLength] = useState(7)
  const [status, setStatus] = useState<'View more' | 'View less'>('View more')

  function showMore() {
    if (length > 7) {
      setLength(7)
      setStatus('View more')
    } else {
      setLength(() => data.length)
      setStatus('View less')
    }
  }

  return (
    <div css={styles.root}>
      {data.slice(0, length).map((d, index) => (
        <div
          key={index}
          css={[styles.list, alternate && index % 2 === 0 ? styles.leftItem : styles.rightItem]}
        >
          <Card
            placement={alternate && index % 2 === 0 ? 'left' : 'right'}
            title={primaryLeft}
            date={primaryRight}
          >
            <div className="text-gray-300">
              <Typography variant="body 3">{secondary}</Typography>
            </div>
          </Card>
        </div>
      ))}
      <div css={styles.button}>
        <CssResetButton className="text-red-300" onClick={showMore}>
          <Typography variant="subtitle 3">{status}</Typography>
        </CssResetButton>
        {status === 'View more' && (
          <div className="text-gray-300">
            <Icon name="arrow-down" />
          </div>
        )}
      </div>
    </div>
  )
}
