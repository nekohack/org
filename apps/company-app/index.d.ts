/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}
