import { JSX } from '@emotion/react/jsx-runtime'

declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '*.svg' {
  const content: unknown
  export default content
}

declare module '*.json' {
  const content: unknown
  export default content
}

declare module '*.png' {
  const content: unknown
  export default content
}

interface Process {
  env: unknown
  browser: boolean
}

declare let process: Process

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}

declare namespace JSX {
  interface ElementChildrenAttribute {
    children: unknown
  }
}

declare module '@emotion/react/jsx-runtime' {
  namespace JSX {
    type ElementType = React.JSX.ElementType;
  }
}
