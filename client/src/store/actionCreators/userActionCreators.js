import { Dispatch } from "redux"
import axiosInstance from './../../api/index.api';
import { setUser, removeUser } from "../reducers/user.reducer";
import { setLoginError, removeLoginError } from "../reducers/error.reducer";
import { setLoginLoading, stopLoginLoading } from "../reducers/loading.reducer";


export const login = (login, password) => async dispatch => {
  try {
    dispatch(setLoginLoading())
    if(!login || !password) {
      console.log(setLoginError('Fill all the fields please'));
      dispatch(setLoginError('Fill all the fields please'))
      return
    }
    const response = await axiosInstance.post('/admin/login', {
      login, password
    })
  
    dispatch(setUser(login))
    dispatch(removeLoginError())
  } catch (e) {
    dispatch(setLoginError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopLoginLoading())
  }
}

export const logout = () => dispatch => {
  dispatch(removeUser())
  dispatch(stopLoginLoading())
  dispatch(removeLoginError())
}