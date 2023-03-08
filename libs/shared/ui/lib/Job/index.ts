import { Job as JobWrap } from './Job'
import { Item } from './Item/Item'

export type { JobProps } from './Job'
export type { ItemProps } from './Item/Item'

export const Job = Object.assign(JobWrap, {
  Item,
})
