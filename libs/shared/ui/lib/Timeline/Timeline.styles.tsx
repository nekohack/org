import { css } from '@emotion/react'

export const root = css`
  padding: 0;
`

export const list = css`
  margin: 0.4rem 0;
  @media (max-width: 600px) {
    padding: 8px;
  }
`

export const leftItem = css`
  left: 0;
  padding: 0 36px 12px 0;
  &::before {
    position: absolute;
    top: 50%;
    right: 30px;
    width: 0;
    height: 0;
    content: '';
    border: solid var(--secondary);
    border-color: transparent transparent transparent var(--secondary);
    border-width: 10px 0 10px 10px;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 1300px) {
    &::after {
      left: 8px;
      z-index: 80;
    }
  }
`

export const rightItem = css`
  left: 50%;
  padding: 0 0 12px 36px;
  &::after {
    left: -12px;
  }
  &::before {
    position: absolute;
    top: 50%;
    left: 30px;
    width: 0;
    height: 0;
    content: '';
    border: 10px solid var(--secondary);
    border-color: transparent var(--secondary) transparent transparent;
    border-width: 10px 10px 10px 0;
    transform: translateY(-50%);
  }
  @media screen and (max-width: 1300px) {
    &::after {
      left: 8px;
      z-index: 80;
    }
  }
`

export const button = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`
