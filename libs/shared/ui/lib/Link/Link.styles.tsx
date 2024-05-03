import { css } from "@emotion/react";

export const link = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background: #ddd;
  padding: 0.3rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.2rem;
  &:hover,
  &:focus {
    filter: brightness(150%);
    transform: translateY(-0.2rem);
  }
  @media (prefers-color-scheme: dark) {
    color: #fff;
    background: #1e2126;
  }
`