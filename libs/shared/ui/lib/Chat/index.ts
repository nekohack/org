import { Chat as _Chat } from './Chat'
import { User } from './User/User'
import { UserMessage } from './UserMessage/UserMessage'

export type { ChatProps } from './Chat'
export type { ChatUserProps } from './User/User'
export type { ChatUserMessageProps } from './UserMessage/UserMessage'

export const Chat = Object.assign(_Chat, {
  User,
  UserMessage,
})
