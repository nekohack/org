const COOKIE_KEY = 'yuukit-cookie'

export const getCookie = () => {
  if (process.browser) {
    return window.localStorage.getItem(COOKIE_KEY)
  }
}

export const setCookie = (flag: boolean) => {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(flag))
}
