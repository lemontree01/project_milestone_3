import React, {useEffect, useState} from 'react'
import { useActions } from './../../../store/hooks/useActions';
import { useSelector } from 'react-redux';
import styles from './ViewDoctors.module.css'
import CreateDoctor from './CreatePatient';

const ViewPatients = () => {

  const {getAllPatients, deletePatient} = useActions()
  const [isCreateDoctorShown, setIsCreateDoctorShown] = useState(false)
  useEffect(() => {
    getAllPatients()
  }, [isCreateDoctorShown])

  const doctors = useSelector(state => state.admin.patients)
  const isGettingDoctorsLoading = useSelector(state => state.loading.isGettingPatientsLoading)

  const deleteDoctorHandler = (_id) => {
    deletePatient(_id)
    getAllPatients()
  }

  return (
    <div>
      <h1>View Patients</h1>
      {isCreateDoctorShown ? <button onClick={() => setIsCreateDoctorShown(false)}>Show patients</button> : 
      <button onClick={() => setIsCreateDoctorShown(true)}>Create a patient</button>}
      {
        isCreateDoctorShown ?
        <CreateDoctor /> :
        (isGettingDoctorsLoading) ? 
      <div>Loading...</div> :
      <div className={styles.doctor_list}>
        {doctors.map(doctor => (
         <DoctorElement doctor={doctor} deleteDoctorHandler={deleteDoctorHandler}/>
        ))

      }

      
      </div>  
    }
    </div>
  )
}

const DoctorElement = ({doctor, deleteDoctorHandler}) => {

  const {modifyPatient: modifyDoctor} = useActions()
  const [isModifying, setIsModifying] = useState(false)
  const [login, setlogin] = useState(doctor.login)
  const [password, setpassword] = useState(doctor.password)
  const [dateOfBirth, setdateOfBirth] = useState(doctor.dateOfBirth)
  const [IINNumber, setIINNumber] = useState(doctor.IINNumber)
  const [IDNumber, setIDNumber] = useState(doctor.IDNumber)
  const [name, setname] = useState(doctor.name)
  const [surname, setsurname] = useState(doctor.surname)
  const [middleName, setmiddleName] = useState(doctor.middleName)
  const [bloodGroup, setbloodGroup] = useState(doctor.bloodGroup)
  const [emergencyContactNumber, setemergencyContactNumber] = useState(doctor.emergencyContactNumber)
  const [contactNumber, setcontactNumber] = useState(doctor.contactNumber)
  const [email, setemail] = useState(doctor.email)
  const [address, setaddress] = useState(doctor.address)
  const [martialStatus, setmartialStatus] = useState(doctor.martialStatus)
  const [registrationDate, setregistrationDate] = useState(doctor.registrationDate)
  const [optionalDetails, setoptionalDetails] = useState(doctor.optionalDetails)

  const onSaveHandler = () => {
    modifyDoctor({
      _id: doctor._id,
login,
password,
dateOfBirth,
IINNumber,
IDNumber,
name,
surname,
middleName,
bloodGroup,
emergencyContactNumber,
contactNumber,
email,
address,
martialStatus,
registrationDate,
optionalDetails,    
    })
    setIsModifying(false)
  }

  const onCancelHandler = () => {
    setlogin(doctor.login)
    setpassword(doctor.password)
    setdateOfBirth(doctor.dateOfBirth)
    setIINNumber(doctor.IINNumber)
    setIDNumber(doctor.IDNumber)
    setname(doctor.name)
    setsurname(doctor.surname)
    setmiddleName(doctor.middleName)
    setbloodGroup(doctor.bloodGroup)
    setemergencyContactNumber(doctor.emergencyContactNumber)
    setcontactNumber(doctor.contactNumber)
    setemail(doctor.email)
    setaddress(doctor.address)
    setmartialStatus(doctor.martialStatus)
    setregistrationDate(doctor.registrationDate)
    setoptionalDetails(doctor.optionalDetails)
    setIsModifying(false)
  }


  return (
    <div
    key={doctor._id}
    className={styles.doctor_element}>
      {
        isModifying ?
      <>
      <input type={"text"} value={login} onChange={e=>setlogin(e.target.value)} placeholder={"login"}/>
      <input type={"text"} value={login} onChange={e=>setlogin(e.target.value)} placeholder={"login"}/>
      <input type={"text"} value={password} onChange={e=>setpassword(e.target.value)} placeholder={"password"}/>
      <input type={"text"} value={dateOfBirth} onChange={e=>setdateOfBirth(e.target.value)} placeholder={"dateOfBirth"}/>
      <input type={"text"} value={IINNumber} onChange={e=>setIINNumber(e.target.value)} placeholder={"IINNumber"}/>
      <input type={"text"} value={IDNumber} onChange={e=>setIDNumber(e.target.value)} placeholder={"IDNumber"}/>
      <input type={"text"} value={name} onChange={e=>setname(e.target.value)} placeholder={"name"}/>
      <input type={"text"} value={surname} onChange={e=>setsurname(e.target.value)} placeholder={"surname"}/>
      <input type={"text"} value={middleName} onChange={e=>setmiddleName(e.target.value)} placeholder={"middleName"}/>
      <input type={"text"} value={bloodGroup} onChange={e=>setbloodGroup(e.target.value)} placeholder={"bloodGroup"}/>
      <input type={"text"} value={emergencyContactNumber} onChange={e=>setemergencyContactNumber(e.target.value)} placeholder={"emergencyContactNumber"}/>
      <input type={"text"} value={contactNumber} onChange={e=>setcontactNumber(e.target.value)} placeholder={"contactNumber"}/>
      <input type={"text"} value={email} onChange={e=>setemail(e.target.value)} placeholder={"email"}/>
      <input type={"text"} value={address} onChange={e=>setaddress(e.target.value)} placeholder={"address"}/>
      <input type={"text"} value={martialStatus} onChange={e=>setmartialStatus(e.target.value)} placeholder={"martialStatus"}/>
      <input type={"text"} value={registrationDate} onChange={e=>setregistrationDate(e.target.value)} placeholder={"registrationDate"}/>
      <input type={"text"} value={optionalDetails} onChange={e=>setoptionalDetails(e.target.value)} placeholder={"optionalDetails"}/>
      </>
    :
    <>
    <div>login: {doctor.login} </div>
    <div>password: {doctor.password} </div>
    <div>dateOfBirth: {doctor.dateOfBirth} </div>
    <div>IINNumber: {doctor.IINNumber} </div>
    <div>IDNumber: {doctor.IDNumber} </div>
    <div>name: {doctor.name} </div>
    <div>surname: {doctor.surname} </div>
    <div>middleName: {doctor.middleName} </div>
    <div>bloodGroup: {doctor.bloodGroup} </div>
    <div>emergencyContactNumber: {doctor.emergencyContactNumber} </div>
    <div>contactNumber: {doctor.contactNumber} </div>
    <div>email: {doctor.email} </div>
    <div>address: {doctor.address} </div>
    <div>martialStatus: {doctor.martialStatus} </div>
    <div>registrationDate: {doctor.registrationDate} </div>
    <div>optionalDetails: {doctor.optionalDetails} </div>
    </>  
    }
    {isModifying ? <><button onClick={onSaveHandler}>Save</button><button onClick={onCancelHandler}>Cancel</button></> : <button onClick={()=>setIsModifying(true)}>Modify</button>}
      <button onClick={()=>deleteDoctorHandler(doctor._id)}>Delete</button>
    </div>
  )
}

export default ViewPatients