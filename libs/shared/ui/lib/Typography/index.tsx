import React from 'react'
import { match } from 'ts-pattern'
import * as styles from './index.styles'

export interface TypographyProps {
  variant: 'title' | 'subtitle 1' | 'subtitle 2' | 'subtitle 3' | 'subtitle 4' | 'subtitle 5' | 'body'
}

export const Typography = (props: React.PropsWithChildren<TypographyProps>) => {
  const { variant, children } = props

  return match(variant)
    .with('title', () => <h1 css={[styles.reset, styles.h1]}>{children}</h1>)
    .with('subtitle 1', () => <h2 css={[styles.reset, styles.h2]}>{children}</h2>)
    .with('subtitle 2', () => <h3 css={[styles.reset, styles.h3]}>{children}</h3>)
    .with('subtitle 3', () => <h4 css={[styles.reset, styles.h4]}>{children}</h4>)
    .with('subtitle 4', () => <h5 css={[styles.reset, styles.h5]}>{children}</h5>)
    .with('subtitle 5', () => <h6 css={[styles.reset, styles.h6]}>{children}</h6>)
    .with('body', () => <p css={[styles.reset, styles.p]}>{children}</p>)
    .exhaustive()
}
