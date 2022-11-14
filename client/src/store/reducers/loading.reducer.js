const SET_LOGIN_LOADING = "SET_LOGIN_LOADING"
const STOP_LOGIN_LOADING = "STOP_LOGIN_LOADING"
const SET_IS_GETTING_PATIENTS_LOADING = "SET_IS_GETTING_PATIENTS_LOADING"
const STOP_IS_GETTING_PATIENTS_LOADING = "STOP_IS_GETTING_PATIENTS_LOADING"
const SET_IS_GETTING_DOCTORS_LOADING = "SET_IS_GETTING_DOCTORS_LOADING"
const STOP_IS_GETTING_DOCTORS_LOADING = "STOP_IS_GETTING_DOCTORS_LOADING"
const SET_IS_ADDING_DOCTORS_LOADING = "SET_IS_ADDING_DOCTORS_LOADING"
const STOP_IS_ADDING_DOCTORS_LOADING = "STOP_IS_ADDING_DOCTORS_LOADING"
const SET_IS_DELETING_DOCTOR_LOADING = "SET_IS_DELETING_DOCTOR_LOADING"
const STOP_IS_DELETING_DOCTOR_LOADING = "STOP_IS_DELETING_DOCTOR_LOADING"

const initialState = {
  isLoginLoading: false,
  isGettingPatientsLoading: false,
  isAddingDoctorsLoading: false,
  isGettingDoctorsLoading: false,
  isDeletingDoctorLoading: false,
}

export const loadingReducer = (state = initialState, action) => {
  switch(action.type) {
    case STOP_LOGIN_LOADING:
      return {
        ...state,
        isLoginLoading: false,
      }
    case SET_LOGIN_LOADING:
      return {
        ...state,
        isLoginLoading: true,
      }  
    case STOP_IS_GETTING_DOCTORS_LOADING:
      return {
        ...state,
        isGettingDoctorsLoading: false,
      }
    case SET_IS_GETTING_DOCTORS_LOADING:
      return {
        ...state,
        isGettingDoctorsLoading: true,
      }   
    case STOP_IS_GETTING_PATIENTS_LOADING:
      return {
        ...state,
        isGettingPatientsLoading: false,
      }
    case SET_IS_GETTING_PATIENTS_LOADING:
      return {
        ...state,
        isGettingPatientsLoading: true,
      }     
    case STOP_IS_ADDING_DOCTORS_LOADING:
      return {
        ...state,
        isAddingDoctorsLoading: false,
      }
    case SET_IS_ADDING_DOCTORS_LOADING:
      return {
        ...state,
        isAddingDoctorsLoading: true,
      }   
    case SET_IS_DELETING_DOCTOR_LOADING:
      return {
        ...state,
        isDeletingDoctorLoading: true,
      } 
    case STOP_IS_DELETING_DOCTOR_LOADING:
      return {
        ...state,
        isDeletingDoctorLoading: false,
      }     
      
    default:
      return state   
  }
}

export const setLoginLoading = () => ({
  type: SET_LOGIN_LOADING,
})

export const stopLoginLoading = () => ({
  type: STOP_LOGIN_LOADING,
})

export const setGettingDoctorsLoading = () => ({
  type: SET_IS_GETTING_DOCTORS_LOADING
})

export const stopGettingDoctorsLoading = () => ({
  type: STOP_IS_GETTING_DOCTORS_LOADING
})

export const setGettingPatientsLoading = () => ({
  type: SET_IS_GETTING_PATIENTS_LOADING
})

export const stopGettingPatientsLoading = () => ({
  type: STOP_IS_GETTING_PATIENTS_LOADING
})

export const setAddingDoctorsLoading = () => ({
  type: SET_IS_GETTING_DOCTORS_LOADING
})

export const stopAddingDoctorsLoading = () => ({
  type: STOP_IS_GETTING_DOCTORS_LOADING
})

export const setIsDeletingDoctorLoading = () => ({
  type: SET_IS_DELETING_DOCTOR_LOADING
})

export const stopIsDeletingDoctorLoading = () => ({
  type: STOP_IS_DELETING_DOCTOR_LOADING
})