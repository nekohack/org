import { Typography } from '../../Typography/Typography'
import * as styles from './Item.styles'

type _ItemProps = React.HTMLProps<HTMLLIElement>

export interface ItemProps extends Omit<_ItemProps, 'label'> {
  label: React.ReactNode
}

export function Item(props: React.PropsWithChildren<ItemProps>) {
  const { children, label } = props

  return (
    <li css={styles.root}>
      <div css={styles.labelItem}>
        <Typography variant="body 2">{label}</Typography>
      </div>
      {children}
    </li>
  )
}
