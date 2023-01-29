import { RefObject, useEffect, useRef } from 'react'

interface UseFocus<T extends HTMLElement> {
  focusRef: RefObject<T>
}

export function useFocus<T extends HTMLElement>(): UseFocus<T> {
  const focusRef = useRef<T>(null)

  useEffect(() => {
    focusRef.current && focusRef.current.focus()
  })

  return { focusRef }
}
