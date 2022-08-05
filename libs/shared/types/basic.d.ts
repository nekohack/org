declare module '*.css' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

declare global {
  namespace NodeJS {
    interface Window {
      adsbygoogle: { [key: string]: unknown }[]
    }
  }
}

export {}
