import { Typography } from '../../Typography'
import * as styles from './index.styles'

export interface CardHeaderProps {
  title: string
  date: string
}

export function CardHeader({ title, date }: CardHeaderProps) {
  return (
    <div css={styles.root}>
      <div className="text-cyan-300">
        <Typography variant="title 3">{title}</Typography>
      </div>
      <div className="text-gray-300">
        <Typography variant="subtitle 3">{date}</Typography>
      </div>
    </div>
  )
}
