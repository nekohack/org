import { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import { positions } from '@org/data'
import { Typography } from '@org/shared/ui'
import * as SC from './index.module.scss'

const HeaderSection: FC = () => {
  const [index, setIndex] = useState(0)

  const inProp = true

  const duration = 2000

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => i + 1)
    }, duration)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={SC.header}>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            {positions[index % positions.length]}
          </div>
        )}
      </Transition>
      <Typography variant="subtitle 1">Yuma Kitamura</Typography>
      <Typography variant="subtitle 2">Osaka, Kyoto in Japan</Typography>
    </div>
  )
}

export default HeaderSection
