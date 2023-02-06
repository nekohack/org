import { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import { positions } from '@org/shared/data'
import { List, Typography } from '@org/shared/ui'

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
    <div className="header">
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Typography variant="title 2">{positions[index % positions.length]}</Typography>
          </div>
        )}
      </Transition>
      <List title="Yuma Kitamura">
        <List.Item label={<Typography variant="subtitle 3">Osaka, Kyoto</Typography>}>
          <Typography variant="body 3">Japan</Typography>
        </List.Item>
      </List>
    </div>
  )
}

export default HeaderSection
