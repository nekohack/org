import { css } from '@emotion/react'

export const root = css`
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
`

export const user = css`
  display: flex;
`

export const avater = css`
  display: grid;
  align-items: start;
  justify-content: left;
  width: 32px;
`

export const nameBox = css`
  display: flex;
  gap: 4px;
`

export const name = css`
  font-weight: 300;
  padding-left: 8px;
`

export const item = css`
  display: grid;
  row-gap: 3px;
`

export const messages = css`
  display: flex;
  column-gap: 4px;
`

export const options = css`
  display: grid;
  grid-template-rows: 24px auto;
  place-items: normal center;
  width: 32px;
`

export const time = css`
  display: grid;
  place-items: end;
`

export const wrapper = {
  me: css`
    column-gap: 4px;
    justify-content: right;
  `,
  other: css`
    column-gap: 4px;
  `,
}

export const offset = css`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 12px;
  }
`
