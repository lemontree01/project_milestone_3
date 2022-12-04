import React, {useState} from 'react'
import styles from './ViewDoctors.module.css'
import { useActions } from './../../../store/hooks/useActions';
import { useSelector } from 'react-redux';

const CreateDoctor = () => {
  const [login, setlogin] = useState("")
  const [password, setpassword] = useState("")
  const [dateOfBirth, setdateOfBirth] = useState("")
  const [IINNumber, setIINNumber] = useState("")
  const [IDNumber, setIDNumber] = useState("")
  const [name, setname] = useState("")
  const [surname, setsurname] = useState("")
  const [middleName, setmiddleName] = useState("")
  const [bloodGroup, setbloodGroup] = useState("")
  const [emergencyContactNumber, setemergencyContactNumber] = useState("")
  const [contactNumber, setcontactNumber] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [martialStatus, setmartialStatus] = useState("")
  const [registrationDate, setregistrationDate] = useState("")
  const [optionalDetails, setoptionalDetails] = useState("")

  const {createPatient} = useActions()

  const isGettingDoctorsLoading = useSelector(state => state.loading.isGettingPatientsLoading)
  const addingDoctorsError = useSelector(state => state.error.addingPatientsError)
  return (
    <div className={styles.create_doctor}>
      <h3>Create Patient</h3>
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
     {
      isGettingDoctorsLoading ?
      <button disabled>Loading...</button> :
      <button onClick={()=>createPatient({
        login
        ,password
        ,dateOfBirth
        ,IINNumber
        ,IDNumber
        ,name
        ,surname
        ,middleName
        ,bloodGroup
        ,emergencyContactNumber
        ,contactNumber
        ,email
        ,address
        ,martialStatus
        ,registrationDate
        ,optionalDetails
      })}>Create</button>
     }
     {addingDoctorsError && <div>Error{addingDoctorsError}</div>}
    </div>
  )
}

export default CreateDoctor