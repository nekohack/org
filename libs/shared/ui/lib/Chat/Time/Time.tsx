import { Typography } from '../../Typography/Typography'
import * as styles from './Time.styles'

export interface ChatTimeProps {
  time: string
}

export function Time(props: ChatTimeProps) {
  const { time } = props

  return (
    <Typography variant="body 3" css={styles.root}>
      {time}
    </Typography>
  )
}
