import { css } from '@emotion/react'

export const root = () => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  align-items: center;
  column-gap: 20px;
  justify-content: space-between;
`

export const labelItem = css`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
