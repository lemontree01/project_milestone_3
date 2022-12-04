const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
  isLogin: false,
  login: null,
  role: null
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.login,
        role: action.role,
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

export const setUser = (login, role) => ({
  type: LOGIN,
  login,
  role,
})

export const removeUser = () => ({
  type: LOGOUT
})