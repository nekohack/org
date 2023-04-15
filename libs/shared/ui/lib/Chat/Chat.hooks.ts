import { Children, ReactNode, useRef, useState, useCallback, useEffect } from 'react'
import { useEffectOnce } from 'react-use'
import { useVirtualizer } from '@tanstack/react-virtual'

export function useChat(children: ReactNode[]) {
  const count = Children.count(children)
  const parentRef = useRef<HTMLDivElement>(null)
  const isAtBottomRef = useRef(false)
  const [calculating, setCalculating] = useState(true)

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  })

  function getScrollTop() {
    if (!parentRef?.current) return 0
    return 99999999999999
  }

  const scrollToBottom = useCallback(async () => {
    parentRef?.current?.scrollTo({ top: getScrollTop() })
  }, [])

  function handleScroll() {
    if (!parentRef?.current) return

    const currentY = parentRef.current.scrollTop + parentRef.current.clientHeight + 30
    const elementHeight = parentRef.current.scrollHeight

    const isAtBottom = currentY > elementHeight
    isAtBottomRef.current = isAtBottom
  }

  async function scrollToBottomUnlessAtBottom() {
    if (!isAtBottomRef.current) {
      await scrollToBottom()
      // await sleep(renderingTime)
      handleScroll()
      // await scrollToBottomUnlessAtBottom()
    }
  }

  useEffectOnce(() => {
    scrollToBottomUnlessAtBottom().then(() => setCalculating(false))
  })

  useEffect(() => {
    if (isAtBottomRef.current) {
      scrollToBottom()
    }
  }, [scrollToBottom])

  return {
    calculating,
    parentRef,
    handleScroll,
    scrollToBottom,
    virtualizer,
    isAtBottomRef,
  }
}
