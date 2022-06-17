declare module 'gatsby-plugin-react-intl' {
  import * as gatsby from 'gatsby'
  import React from 'react'

  export * from 'react-locales'

  export class Link<TState> extends gatsby.Link<TState> {}
  export const navigate: typeof gatsby.navigate
  export const changeLocale: (language: string, to?: string) => void
  export const IntlContextProvider: React.Provider<any> | any
  export const IntlContextConsumer: React.Consumer<any> | any
}
