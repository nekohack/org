import { css } from '@emotion/react'

export const root = (placement: 'left' | 'right') => () =>
  css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 120px;
    padding: 1.2rem 1.4rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px 0 rgb(22 27 34 / 30%);
    transition: box-shadow 300ms ease;
    cursor: default;
    ${placement === 'left' &&
    css`
      &::after {
        position: absolute;
        top: 50%;
        right: -33px;
        z-index: 10;
        width: 25px;
        height: 25px;
        border-color: #2a2a2a;
        border-width: 10px 10px 10px 0;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
      }
    `}
    ${placement === 'right' &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: -33px;
        z-index: 10;
        width: 25px;
        height: 25px;
        border-color: #2a2a2a;
        border-width: 10px 0 10px 10px;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
      }
    `}
    @media screen and (max-width: 600px) {
      align-items: center;
      max-width: 100%;
    }
  `