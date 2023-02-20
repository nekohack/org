import { css } from '@emotion/react'

export const root = css`
  position: relative;
  text-align: center;
  line-height: 0;
  padding: 8px 0;
  &::after {
    display: block;
    content: '';
    border-bottom: 1px solid #2d2d2d;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: -1;
  }
`

export const text = css`
  background-color: #e2e2e2;
  padding: 0 16px;
  font-weight: 300;
  color: #2d2d2d;
`
