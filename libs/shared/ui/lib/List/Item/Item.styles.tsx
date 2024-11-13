import { css } from '@emotion/react'

export const root = () => css`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  column-gap: 20px;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const labelItem = css`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
