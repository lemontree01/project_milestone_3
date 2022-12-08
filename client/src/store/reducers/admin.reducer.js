const SET_ALL_DOCTORS = 'SET_ALL_DOCTORS'
const SET_ALL_PATIENTS = 'SET_ALL_PATIENTS'
const SET_ALL_APPOINTMENTS = 'SET_ALL_APPOINTMENTS'

const initialState = {
  doctors: [],
  patients: [],
  appointments: [],
}

export const adminReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_DOCTORS:
      return {
        ...state,
        patients: [...state.patients],
        appointments: [...state.appointments],
        doctors: action.payload,
      }
    case SET_ALL_PATIENTS:
      return {
        ...state,
        doctors: [...state.doctors],
        appointments: [...state.appointments],
        patients: action.payload,
      }
    case SET_ALL_APPOINTMENTS:
        return {
          ...state,
          doctors: [...state.doctors],
          appointments: action.payload,
          patients: [...state.patients]
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

export const setAllAppointments = appointments => ({
  type: SET_ALL_APPOINTMENTS,
  payload: appointments
})