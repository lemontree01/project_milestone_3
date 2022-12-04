import { Dispatch } from "redux"
import axiosInstance from './../../api/index.api';
import { setAllDoctors } from "../reducers/admin.reducer";
import { removeGettingDoctorsError, setGettingDoctorsError, removeAddingDoctorsError, setAddingDoctorsError, removeDeletingDoctorError, setDeletingDoctorError, removeGettingPatientsError, setGettingPatientsError, removeAddingPatientsError, setAddingPatientsError, removeDeletingPatientError, setDeletingPatientError } from './../reducers/error.reducer';
import { stopGettingDoctorsLoading, setGettingDoctorsLoading, setAddingDoctorsLoading, stopAddingDoctorsLoading, setIsDeletingDoctorLoading, stopIsDeletingDoctorLoading, setGettingPatientsLoading, stopGettingPatientsLoading, setAddingPatientsLoading, stopAddingPatientsLoading, setIsDeletingPatientLoading, stopIsDeletingPatientLoading } from './../reducers/loading.reducer';
import { setAllPatients } from './../reducers/admin.reducer';


export const getAllDoctors = () => async dispatch => {
  try {
    dispatch(setGettingDoctorsLoading())
    const {data} = await axiosInstance.get('/admin/getdoctors')
    dispatch(setAllDoctors(data))
    dispatch(removeGettingDoctorsError())
  } catch (e) {
    dispatch(setGettingDoctorsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopGettingDoctorsLoading())
  }
}

export const createDoctor = doctor => async dispatch => {
  try {
    dispatch(setAddingDoctorsLoading())
    await axiosInstance.post('/admin/createdoctor', doctor)
    const {data} = await axiosInstance.get('/admin/getdoctors')
    dispatch(setAllDoctors(data))
    dispatch(removeAddingDoctorsError())
  } catch (e) {
    dispatch(setAddingDoctorsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopAddingDoctorsLoading())
  }
}

export const deleteDoctor = _id => async dispatch => {
  try {
    dispatch(setIsDeletingDoctorLoading())
    await axiosInstance.delete('/admin/deletedoctor/' + _id)
    const {data} = await axiosInstance.get('/admin/getdoctors')
    dispatch(setAllDoctors(data))
    dispatch(removeDeletingDoctorError())
  } catch(e) {
    dispatch(setDeletingDoctorError(e?.response?.data?.message ?? 'Error with server'))
  } finally {
    dispatch(stopIsDeletingDoctorLoading())
  }
}

export const modifyDoctor = doctor => async dispatch => {
  try {
    await axiosInstance.post('/admin/modifydoctor', doctor)
    const {data} = await axiosInstance.get('/admin/getdoctors')
    dispatch(setAllDoctors(data))
  }
  catch(e) {
    
  }
}

export const getAllPatients = () => async dispatch => {
  try {
    dispatch(setGettingPatientsLoading())
    const {data} = await axiosInstance.get('/admin/getpatients')
    dispatch(setAllPatients(data))
    dispatch(removeGettingPatientsError())
  } catch (e) {
    dispatch(setGettingPatientsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopGettingPatientsLoading())
  }
}

export const createPatient = patient => async dispatch => {
  try {
    dispatch(setAddingPatientsLoading())
    await axiosInstance.post('/admin/createpatient', patient)
    const {data} = await axiosInstance.get('/admin/getpatients')
    dispatch(setAllPatients(data))
    dispatch(removeAddingPatientsError())
  } catch (e) {
    dispatch(setAddingPatientsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopAddingPatientsLoading())
  }
}

export const deletePatient = _id => async dispatch => {
  try {
    dispatch(setIsDeletingPatientLoading())
    await axiosInstance.delete('/admin/deletepatient/' + _id)
    const {data} = await axiosInstance.get('/admin/getpatients')
    dispatch(setAllPatients(data))
    dispatch(removeDeletingPatientError())
  } catch(e) {
    dispatch(setDeletingPatientError(e?.response?.data?.message ?? 'Error with server'))
  } finally {
    dispatch(stopIsDeletingPatientLoading())
  }
}

export const modifyPatient = patient => async dispatch => {
  try {
    await axiosInstance.post('/admin/modifypatient', patient)
    const {data} = await axiosInstance.get('/admin/getpatients')
    dispatch(setAllPatients(data))
  }
  catch(e) {
    
  }
}