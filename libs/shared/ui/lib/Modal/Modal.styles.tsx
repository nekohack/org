import { css } from '@emotion/react'

export const mask = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 50%);
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const wrapper = css`
  position: relative;
  z-index: 10001;
  display: flex;
  height: auto;
  padding: 20px;
  color: #000;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }
`
