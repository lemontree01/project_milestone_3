const SET_ALL_DOCTORS = 'SET_ALL_DOCTORS'
const SET_ALL_PATIENTS = 'SET_ALL_PATIENTS'

const initialState = {
  doctors: [],
  patients: [],
}

export const adminReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_DOCTORS:
      return {
        ...state,
        patients: [...state.patients],
        doctors: action.payload,
      }
    case SET_ALL_PATIENTS:
      return {
        ...state,
        doctors: [...state.doctors],
        patients: action.payload,
      }
      default:
        return state  
  }
}

export const setAllDoctors = doctors => ({
  type: SET_ALL_DOCTORS,
  payload: doctors
})

export const setAllPatients = patients => ({
  type: SET_ALL_PATIENTS,
  payload: patients
})