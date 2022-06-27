import { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import * as SC from './index.module.scss'
import { positions } from '@utils/position.constants'

const Header: FC = () => {
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
    <div className={SC.title}>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            {positions[index % positions.length]}
          </div>
        )}
      </Transition>
      <div className={SC.name}>Yuma Kitamura</div>
      <div className={SC.locale}>Osaka, Kyoto in Japan</div>
    </div>
  )
}

export default Header
