import React from 'react'
import { match } from 'ts-pattern'
import { ArrowDown } from './images/ArrowDown'
import { Contact } from './images/Contact'
import { GitHub } from './images/GitHub'
import { Person } from './images/Person'
import { Twitter } from './images/Twitter'

export interface IconProps {
  name: 'arrow-down' | 'contact' | 'github' | 'person' | 'twitter'
  width?: string
  height?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { name } = props

  return match(name)
    .with('arrow-down', () => <ArrowDown />)
    .with('contact', () => <Contact />)
    .with('github', () => <GitHub />)
    .with('person', () => <Person />)
    .with('twitter', () => <Twitter />)
    .exhaustive()
}
