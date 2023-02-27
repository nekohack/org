declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.json' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

interface Process {
  env: any
  browser: boolean
}

// @ts-ignore
declare let process: Process

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}

declare namespace JSX {
  interface ElementChildrenAttribute {
    children: any
    'cookie-footer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  }

  interface IntrinsicElements {
    'cookie-footer': {
      name: string
      title: string
      url: string
    }
  }
}
