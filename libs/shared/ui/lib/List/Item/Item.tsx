import * as styles from './Item.styles'

type _ItemProps = React.HTMLProps<HTMLLIElement>

export interface ItemProps extends Omit<_ItemProps, 'label'> {
  label: React.ReactNode
}

export function Item(props: React.PropsWithChildren<ItemProps>) {
  const { children, label } = props

  return (
    <div css={styles.root}>
      <div css={styles.labelItem}>
        {label}
      </div>
      {children}
    </div>
  )
}
