import { LOGIN_USER, LOGOUT_USER, AUTHENTICATE_USER } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
    case LOGOUT_USER:
    case AUTHENTICATE_USER:
      return action.payload || false
    default:
      return state
  }
}
