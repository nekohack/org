import React from 'react'
import { match } from 'ts-pattern'
import * as styles from './index.styles'

export interface TypographyProps {
  variant:
    | 'title 1'
    | 'title 2'
    | 'title 3'
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
    .with('title 1', () => <h1 css={[styles.reset, styles.title1]}>{children}</h1>)
    .with('title 2', () => <h2 css={[styles.reset, styles.title2]}>{children}</h2>)
    .with('title 3', () => <h3 css={[styles.reset, styles.title3]}>{children}</h3>)
    .with('subtitle 1', () => <p css={[styles.reset, styles.subtitle1]}>{children}</p>)
    .with('subtitle 2', () => <p css={[styles.reset, styles.subtitle2]}>{children}</p>)
    .with('subtitle 3', () => <p css={[styles.reset, styles.subtitle3]}>{children}</p>)
    .with('body 1', () => <p css={[styles.reset, styles.body1]}>{children}</p>)
    .with('body 2', () => <p css={[styles.reset, styles.body2]}>{children}</p>)
    .with('body 3', () => <p css={[styles.reset, styles.body3]}>{children}</p>)
    .exhaustive()
}
