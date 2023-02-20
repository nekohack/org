import { Children, useRef, useState, useEffect, useCallback } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffectOnce, usePrevious } from 'react-use'

export function useChat(children: React.ReactNode[]) {
  const parentRef = useRef<HTMLDivElement>(null)
  const isAtBottomRef = useRef(false)
  const [calculating, setCalculating] = useState(true)

  const count = Children.count(children)

  const prevCount = usePrevious(count)
  const newMessageArrived = count !== prevCount

  const renderingTime = 50

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

    await sleep(renderingTime)

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
      await sleep(renderingTime)
      handleScroll()
      await scrollToBottomUnlessAtBottom()
    }
  }

  useEffectOnce(() => {
    scrollToBottomUnlessAtBottom().then(() => setCalculating(false))
  })

  useEffect(() => {
    if (newMessageArrived && isAtBottomRef.current) {
      scrollToBottom()
    }
  }, [newMessageArrived, scrollToBottom])

  return {
    calculating,
    parentRef,
    handleScroll,
    scrollToBottom,
    virtualizer,
    isAtBottomRef,
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
