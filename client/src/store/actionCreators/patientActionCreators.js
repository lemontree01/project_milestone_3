import { Dispatch } from "redux"
import axiosInstance from './../../api/index.api';
import { setAllDoctors } from "../reducers/admin.reducer";
import { removeGettingDoctorsError, setGettingDoctorsError, removeAddingDoctorsError, setAddingDoctorsError, removeDeletingDoctorError, setDeletingDoctorError, removeGettingPatientsError, setGettingPatientsError, removeAddingPatientsError, setAddingPatientsError, removeDeletingPatientError, setDeletingPatientError } from './../reducers/error.reducer';
import { stopGettingDoctorsLoading, setGettingDoctorsLoading, setAddingDoctorsLoading, stopAddingDoctorsLoading, setIsDeletingDoctorLoading, stopIsDeletingDoctorLoading, setGettingPatientsLoading, stopGettingPatientsLoading, setAddingPatientsLoading, stopAddingPatientsLoading, setIsDeletingPatientLoading, stopIsDeletingPatientLoading } from './../reducers/loading.reducer';
import { setAllPatients } from './../reducers/admin.reducer';

export const searchDoctors = query => async dispatch => {
  try {
    dispatch(setGettingDoctorsLoading())
    query = query.charAt(0).toUpperCase() + query.slice(1)
    const {data} = await axiosInstance.get('/patient/search/' + query)
    dispatch(setAllDoctors(data.message))
    dispatch(removeGettingDoctorsError())
  } catch (e) {
    dispatch(setGettingDoctorsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopGettingDoctorsLoading())
  }
}

export const sendAppointment = (name,
  surname,
  contactDetails,
  appointmentTime,
  doctorID) => async dispatch => {
    try {
      await axiosInstance.post('/patient/makeAppointment', {name,
        surname,
        contactDetails,
        appointmentTime,
        doctorID
      })
      
    } catch(e) {

    }
  }