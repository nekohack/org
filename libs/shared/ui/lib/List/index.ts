import { List as ListWrap } from './List'
import { Item } from './Item/Item'

export type { ListProps } from './List'
export type { ItemProps as ListItemProps } from './Item/Item'

export const List = Object.assign(ListWrap, {
  Item,
})
