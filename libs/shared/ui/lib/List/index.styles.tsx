import { css } from '@emotion/react'

export const list = () => css`
  margin: 0;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const headerLabel = () => css`
  color: #2d2d2d;
  padding: 0 0 12px;
  border-bottom: 1px solid #3d3d3d;
  @media (prefers-color-scheme: dark) {
    color: #dedede;
    border-bottom: 1px solid #bebebe;
  }
`

export const headerLabelItem = () => css`
  font-weight: 600;
`
