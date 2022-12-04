import * as UserActionCreators from './userActionCreators'
import * as AdminActionCreators from './adminActionCreators'
import * as PatientActionCreators from './patientActionCreators'

export const ActionCreators = {
  ...UserActionCreators,
  ...AdminActionCreators,
  ...PatientActionCreators,
}