import { Chat as _Chat } from './Chat'
import { User } from './User/User'
import { UserMessage } from './UserMessage/UserMessage'
import { NewMessageBar } from './NewMessageBar/NewMessageBar'
import { Date } from './Date/Date'
import { Time } from './Time/Time'

export type { ChatProps } from './Chat'
export type { ChatUserProps } from './User/User'
export type { ChatUserMessageProps } from './UserMessage/UserMessage'
export type { ChatNewMessageBarProps } from './NewMessageBar/NewMessageBar'
export type { ChatDateProps } from './Date/Date'
export type { ChatTimeProps } from './Time/Time'

export const Chat = Object.assign(_Chat, {
  User,
  UserMessage,
  NewMessageBar,
  Date,
  Time,
})
