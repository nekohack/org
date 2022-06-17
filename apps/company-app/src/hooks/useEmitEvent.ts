import * as React from 'react'

type ReturnType<T> = {
  event: CustomEvent<T> | null
  dispatch: () => boolean
}

export function useEmitEvent<T = unknown>(
  eventName: string,
  payload?: T,
  options?: Omit<CustomEventInit, 'detail'>,
): ReturnType<T> {
  const [event, setEvent] = React.useState<CustomEvent | null>(null)

  React.useEffect(() => {
    const event = new CustomEvent(eventName, {
      detail: payload,
      ...options,
    })

    setEvent(event)

    return () => {
      setEvent(null)
    }
  }, [eventName, options, payload])

  const dispatch = React.useCallback(() => {
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
