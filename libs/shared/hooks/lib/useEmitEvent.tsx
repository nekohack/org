import { useCallback, useEffect, useState } from 'react'

interface UseEmitEvent<T> {
  event: CustomEvent<T> | null
  dispatch: () => boolean
}

export function useEmitEvent<T = unknown>(
  eventName: string,
  payload?: T,
  options?: Omit<CustomEventInit, 'detail'>,
): UseEmitEvent<T> {
  const [event, setEvent] = useState<CustomEvent | null>(null)

  useEffect(() => {
    const event = new CustomEvent(eventName, {
      detail: payload,
      ...options,
    })

    setEvent(event)

    return () => {
      setEvent(null)
    }
  }, [eventName, options, payload])

  const dispatch = useCallback(() => {
    if (!event) {
      throw new Error('somehow event was null')
    }

    const d = dispatchEvent(event)

    return d
  }, [event])

  return {
    event,
    dispatch,
  }
}
