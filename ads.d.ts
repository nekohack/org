interface Window {
  prerenderReady: boolean
  adsbygoogle: { [key: string]: unknown }[]
}

declare global {
  var window: Window
}
