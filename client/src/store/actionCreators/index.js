import * as UserActionCreators from './userActionCreators'
import * as AdminActionCreators from './adminActionCreators'

export const ActionCreators = {
  ...UserActionCreators,
  ...AdminActionCreators,
}