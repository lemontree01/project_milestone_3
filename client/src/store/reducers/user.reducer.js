const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
  isLogin: false,
  login: null
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
        isLogin: true,
      }
    case LOGOUT:
      return {
        ...state,
        login: null,
        isLogin: false,
      }
      default:
        return state  
  }
}

export const setUser = (login) => ({
  type: LOGIN,
  payload: login
})

export const removeUser = () => ({
  type: LOGOUT
})