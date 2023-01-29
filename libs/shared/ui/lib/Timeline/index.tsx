import { useState } from 'react'
import { CssResetButton } from '../CssResetButton'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { Card } from './Card'
import * as styles from './index.styles'

export interface TimelineProps {
  data: {
    date: string
    fullDate?: string // eg: March 28, 2021
    title: string
    description?: string
    url?: string
    imageUrl?: string
  }[]
}

export function Timeline({ data }: TimelineProps) {
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
        <div key={index} css={[styles.list, index % 2 === 0 ? styles.leftItem : styles.rightItem]}>
          <Card placement={index % 2 === 0 ? 'left' : 'right'} title={d.title} date={d.date}>
            <div className="text-gray-300">
              <Typography variant="body 3">{d.description}</Typography>
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
