import { Typography } from '../../Typography/Typography'
import * as styles from './Date.styles'

export interface ChatDateProps {
  date: string
}

export function Date(props: ChatDateProps) {
  const { date } = props

  return (
    <div css={styles.root}>
      <Typography variant="body 3" css={styles.text}>
        {date}
      </Typography>
    </div>
  )
}
