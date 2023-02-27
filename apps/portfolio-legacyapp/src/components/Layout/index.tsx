import { Fragment, ReactNode } from 'react'

export function Layout({ children }: { children?: ReactNode }) {
  return <Fragment>{children}</Fragment>
}
