import { useEffect, useState } from 'react'

interface UseTimer {
  timer: number
}

export const useTimer = (duration: number): UseTimer => {
  const [timer, setTimer] = useState(duration)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(this)
      } else {
        setTimer(timer - 100)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [timer])

  return { timer }
}
