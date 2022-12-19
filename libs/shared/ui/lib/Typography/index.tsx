import React from 'react'
import { match } from 'ts-pattern'
import * as styles from './index.styles'

export interface TypographyProps {
  variant:
    | 'title 1'
    | 'title 2'
    | 'subtitle 1'
    | 'subtitle 2'
    | 'subtitle 3'
    | 'body 1'
    | 'body 2'
    | 'body 3'
}

export const Typography = (props: React.PropsWithChildren<TypographyProps>) => {
  const { variant, children } = props

  return match(variant)
    .with('title 1', () => <h1 css={[styles.reset, styles.h1]}>{children}</h1>)
    .with('title 2', () => <h1 css={[styles.reset, styles.h2]}>{children}</h1>)
    .with('subtitle 1', () => <h2 css={[styles.reset, styles.h3]}>{children}</h2>)
    .with('subtitle 2', () => <h3 css={[styles.reset, styles.h4]}>{children}</h3>)
    .with('subtitle 3', () => <h4 css={[styles.reset, styles.h5]}>{children}</h4>)
    .with('body 1', () => <h5 css={[styles.reset, styles.p]}>{children}</h5>)
    .with('body 2', () => <h6 css={[styles.reset, styles.p]}>{children}</h6>)
    .with('body 3', () => <p css={[styles.reset, styles.p]}>{children}</p>)
    .exhaustive()
}
