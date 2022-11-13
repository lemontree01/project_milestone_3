const SET_LOGIN_ERROR = "SET_LOGIN_ERROR"
const REMOVE_LOGIN_ERROR = "REMOVE_LOGIN_ERROR"
const SET_GETTING_DOCTORS_ERROR = "SET_GETTING_DOCTORS_ERROR"
const REMOVE_GETTING_DOCTORS_ERROR = "REMOVE_GETTING_DOCTORS_ERROR"
const SET_ADDING_DOCTORS_ERROR = "SET_ADDING_DOCTORS_ERROR"
const REMOVE_ADDING_DOCTORS_ERROR = "REMOVE_ADDING_DOCTORS_ERROR"
const SET_GETTING_PATIENTS_ERROR = "SET_GETTING_PATIENTS"
const REMOVE_GETTING_PATIENTS_ERROR = "REMOVE_GETTING_PATIENTS_ERROR"


const initialState = {
  loginError: null,
  gettingDoctorsError: null,
  addingDoctorsError: null,
  gettingPatientsError: null,
}

export const errorReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      }  
    case REMOVE_LOGIN_ERROR:
      return {
        ...state,
        loginError: null,
      }
    case SET_GETTING_DOCTORS_ERROR:
      return {
        ...state,
        gettingDoctorsError: action.payload,
      }  
    case REMOVE_GETTING_DOCTORS_ERROR:
      return {
        ...state,
        gettingDoctorsError: null,
      } 
    case SET_ADDING_DOCTORS_ERROR:
      return {
        ...state,
        addingDoctorsError: action.payload,
      }  
    case REMOVE_ADDING_DOCTORS_ERROR:
      return {
        ...state,
        addingDoctorsError: null,
      } 
    case SET_GETTING_PATIENTS_ERROR:
      return {
        ...state,
        gettingPatientsError: action.payload,
      }  
    case REMOVE_GETTING_PATIENTS_ERROR:
      return {
        ...state,
        gettingPatientsError: null,
        } 
    default:
      return state   
  }
}

export const setLoginError = error => ({
  type: SET_LOGIN_ERROR,
  payload: error,
})

export const removeLoginError = () => ({
  type: REMOVE_LOGIN_ERROR,
})

export const setGettingDoctorsError = error => ({
  type: SET_GETTING_DOCTORS_ERROR,
  payload: error,
})

export const removeGettingDoctorsError = () => ({
  type: REMOVE_GETTING_DOCTORS_ERROR,
})

export const setGettingPatientsError = error => ({
  type: SET_GETTING_PATIENTS_ERROR,
  payload: error,
})

export const removeGettingPatientsError = () => ({
  type: REMOVE_GETTING_PATIENTS_ERROR,
})

export const setAddingDoctorsError = error => ({
  type: SET_ADDING_DOCTORS_ERROR,
  payload: error,
})

export const removeAddingDoctorsError = () => ({
  type: REMOVE_ADDING_DOCTORS_ERROR,
})