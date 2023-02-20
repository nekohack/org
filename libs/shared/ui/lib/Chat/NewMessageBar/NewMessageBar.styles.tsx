import { css } from '@emotion/react'

export const root = css`
  background-color: #312e81;
  color: #fefefe;
  position: relative;
  padding: 4px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 300px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`
