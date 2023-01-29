import { css } from '@emotion/react'

export const root = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
