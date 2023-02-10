import * as styles from './Timeline.styles'

export interface TimelineProps {
  //
}

export function Timeline({ children }: React.PropsWithChildren<TimelineProps>) {
  return <div css={styles.root}>{children}</div>
}
