import { css } from '@emotion/react'

export const root = (hidden: boolean) => () =>
  css`
    visibility: ${hidden ? 'hidden' : 'visible'};
    position: relative;
  `

export const vScrollWrapper = (width: number, height: number) => () =>
  css`
    width: ${width}px;
    height: ${height}px;
    display: grid;
    overflow-y: visible;
    overflow-x: hidden;
    position: relative;
    padding: 0 8px 0 10px;
  `

export const list = (height: number) => () =>
  css`
    width: 100%;
    height: ${height}px;
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
  `

export const item = (locY: number) => () =>
  css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(${locY}px);
  `

export const newMessage = (width: number) => () =>
  css`
    width: ${width - 24}px;
    position: absolute;
    top: 0;
    left: 12px;
  `
