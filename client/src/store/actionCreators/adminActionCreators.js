import { Dispatch } from "redux"
import axiosInstance from './../../api/index.api';
import { setAllDoctors } from "../reducers/admin.reducer";
import { removeGettingDoctorsError, setGettingDoctorsError, removeAddingDoctorsError, setAddingDoctorsError } from './../reducers/error.reducer';
import { stopGettingDoctorsLoading, setGettingDoctorsLoading, setAddingDoctorsLoading, stopAddingDoctorsLoading } from './../reducers/loading.reducer';


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
    const {data} = await axiosInstance.post('/admin/createdoctor', doctor)
    dispatch(setAllDoctors(data))
    dispatch(removeAddingDoctorsError())
  } catch (e) {
    dispatch(setAddingDoctorsError(e?.response?.data?.message ?? 'Error with server'))
  }
  finally {
    dispatch(stopAddingDoctorsLoading())
  }
}

