import { Dispatch } from "redux"
import axiosInstance from './../../api/index.api';
import { setAllDoctors } from "../reducers/admin.reducer";
import { removeGettingDoctorsError, setGettingDoctorsError, removeAddingDoctorsError, setAddingDoctorsError, removeDeletingDoctorError, setDeletingDoctorError } from './../reducers/error.reducer';
import { stopGettingDoctorsLoading, setGettingDoctorsLoading, setAddingDoctorsLoading, stopAddingDoctorsLoading, setIsDeletingDoctorLoading, stopIsDeletingDoctorLoading } from './../reducers/loading.reducer';


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
