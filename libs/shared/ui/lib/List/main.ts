import { List as ListWrap } from './index'
import { Item } from './Item/Item'

export type { ListProps } from './index'
export type { ItemProps as ListItemProps } from './Item/Item'

export const List = Object.assign(ListWrap, {
  Item,
})
