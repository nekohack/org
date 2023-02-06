import { Typography } from '../../Typography/index'
import * as styles from './Item.styles'

type _ItemProps = React.HTMLProps<HTMLLIElement>

export interface ItemProps extends Omit<_ItemProps, 'label'> {
  label: React.ReactNode
}

export function Item(props: React.PropsWithChildren<ItemProps>) {
  const { children, label } = props

  return (
    <li css={styles.root}>
      <Typography variant="body 2" css={styles.labelItem}>
        {label}
      </Typography>
      {children}
    </li>
  )
}
