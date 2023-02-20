import { css } from '@emotion/react'
import LeftMessage from '../../../images/icon/LeftMessage.svg'
import RightMessage from '../../../images/icon/RightMessage.svg'

export const root = css`
  display: flex;
  max-width: 240px;
`

export const text = css`
  font-weight: 300;
  color: #2d2d2d;
  white-space: pre-wrap;
  word-break: break-word;
`

export const side = {
  other: css`
    justify-content: left;
    padding-left: 8px;
  `,
  me: css`
    justify-content: right;
    padding-right: 8px;
  `,
}

export const wrapper = css`
  padding: 10px;
  position: relative;
  display: inline-block;
  min-width: 30px;
  min-height: 43px;
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 18px;
    display: block;
  }
`

export const position = {
  other: css`
    background-color: #e8e8e8;
    color: #3d3d3d;
    border-radius: 0 12px 12px 12px;
    &::before {
      background-image: url(${LeftMessage});
      left: -8px;
      top: 0;
    }
  `,
  me: css`
    background-color: #c7d2fe;
    color: #2d2d2d;
    border-radius: 12px 0 12px 12px;
    justify-content: right;
    &::before {
      background-image: url(${RightMessage});
      right: -8px;
      top: 0;
    }
  `,
}
