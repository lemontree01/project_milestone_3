import React, {useEffect, useState} from 'react'
import { useActions } from './../../../store/hooks/useActions';
import { useSelector } from 'react-redux';
import styles from './ViewDoctors.module.css'
import CreateDoctor from './CreateDoctor';

const ViewDoctors = () => {

  const {getAllDoctors} = useActions()
  const [isCreateDoctorShown, setIsCreateDoctorShown] = useState(false)
  useEffect(() => {
    getAllDoctors()
  }, [isCreateDoctorShown])

  const doctors = useSelector(state => state.admin.doctors)
  const isGettingDoctorsLoading = useSelector(state => state.loading.isGettingDoctorsLoading)



  return (
    <div>
      <h1>View Doctors</h1>
      {isCreateDoctorShown ? <button onClick={() => setIsCreateDoctorShown(false)}>Show doctors</button> : 
      <button onClick={() => setIsCreateDoctorShown(true)}>Create a doctor</button>}
      {
        isCreateDoctorShown ?
        <CreateDoctor /> :
        (isGettingDoctorsLoading) ? 
      <div>Loading...</div> :
      <div className={styles.doctor_list}>
        {doctors.map(doctor => (
          <div
          key={doctor._id}
          className={styles.doctor_element}>
            <div>login: {doctor.login} </div>
            <div>password: {doctor.password} </div>
            <div>dateOfBirth: {doctor.dateOfBirth} </div>
            <div>IINNumber: {doctor.IINNumber} </div>
            <div>IDNumber: {doctor.IDNumber} </div>
            <div>name: {doctor.name} </div>
            <div>surname: {doctor.surname} </div>
            <div>contactNumber: {doctor.contactNumber} </div>
            <div>departmentID: {doctor.departmentID} </div>
            <div>specializationDetailsID: {doctor.specializationDetailsID} </div>
            <div>experience: {doctor.experience} </div>
            <div>photo: {doctor.photo} </div>
            <div>category: {doctor.category} </div>
            <div>price: {doctor.price} </div>
            <div>scheduleDetails: {doctor.scheduleDetails} </div>
            <div>degree: {doctor.degree} </div>
            <div>rating: {doctor.rating} </div>
            <div>address: {doctor.address} </div>
            <div>homepageURL: {doctor.homepageURL} </div>
          </div>
        ))

      }

      
      </div>  
    }
    </div>
  )
}

export default ViewDoctors