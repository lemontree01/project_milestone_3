import React, {useEffect, useState} from 'react'
import { useActions } from './../../../store/hooks/useActions';
import { useSelector } from 'react-redux';
import styles from './ViewDoctors.module.css'
import CreateDoctor from './CreateDoctor';

const ViewDoctors = () => {

  const {getAllDoctors, deleteDoctor} = useActions()
  const [isCreateDoctorShown, setIsCreateDoctorShown] = useState(false)
  useEffect(() => {
    getAllDoctors()
  }, [isCreateDoctorShown])

  const doctors = useSelector(state => state.admin.doctors)
  console.log(doctors)
  const isGettingDoctorsLoading = useSelector(state => state.loading.isGettingDoctorsLoading)

  const deleteDoctorHandler = (_id) => {
    deleteDoctor(_id)
    getAllDoctors()
  }

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
         <DoctorElement key={doctor._id} doctor={doctor} deleteDoctorHandler={deleteDoctorHandler}/>
        ))

      }

      
      </div>  
    }
    </div>
  )
}

const DoctorElement = ({doctor, deleteDoctorHandler}) => {

  const {modifyDoctor} = useActions()
  const [isModifying, setIsModifying] = useState(false)
  const [login, setlogin] = useState(doctor.login)
  const [password, setpassword] = useState(doctor.password)
  const [dateOfBirth, setdateOfBirth] = useState(doctor.dateOfBirth)
  const [IINNumber, setIINNumber] = useState(doctor.IINNumber)
  const [IDNumber, setIDNumber] = useState(doctor.IDNumber)
  const [name, setname] = useState(doctor.name)
  const [surname, setsurname] = useState(doctor.surname)
  const [contactNumber, setcontactNumber] = useState(doctor.contactNumber)
  const [departmentID, setdepartmentID] = useState(doctor.departmentID)
  const [specializationDetailsID, setspecializationDetailsID] = useState(doctor.specializationDetailsID)
  const [experience, setexperience] = useState(doctor.experience)
  const [photo, setphoto] = useState(doctor.photo)
  const [category, setcategory] = useState(doctor.category)
  const [price, setprice] = useState(doctor.price)
  const [scheduleDetails, setscheduleDetails] = useState(doctor.scheduleDetails)
  const [degree, setdegree] = useState(doctor.degree)
  const [rating, setrating] = useState(doctor.rating)
  const [address, setaddress] = useState(doctor.address)
  const [homepageURL, sethomepageURL] = useState(doctor.homepageURL)

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
      contactNumber, 
      departmentID, 
      specializationDetailsID, 
      experience, 
      photo, 
      category, 
      price, 
      scheduleDetails, 
      degree, 
      rating, 
      address, 
      homepageURL,       
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
    setcontactNumber(doctor.contactNumber)
    setdepartmentID(doctor.departmentID)
    setspecializationDetailsID(doctor.specializationDetailsID)
    setexperience(doctor.experience)
    setphoto(doctor.photo)
    setcategory(doctor.category)
    setprice(doctor.price)
    setscheduleDetails(doctor.scheduleDetails)
    setdegree(doctor.degree)
    setrating(doctor.rating)
    setaddress(doctor.address)
    sethomepageURL(doctor.homepageURL)
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
      <input type={"text"} value={password} onChange={e=>setpassword(e.target.value)} placeholder={"password"}/>
      <input type={"text"} value={dateOfBirth} onChange={e=>setdateOfBirth(e.target.value)} placeholder={"dateOfBirth"}/>
      <input type={"text"} value={IINNumber} onChange={e=>setIINNumber(e.target.value)} placeholder={"IINNumber"}/>
      <input type={"text"} value={IDNumber} onChange={e=>setIDNumber(e.target.value)} placeholder={"IDNumber"}/>
      <input type={"text"} value={name} onChange={e=>setname(e.target.value)} placeholder={"name"}/>
      <input type={"text"} value={surname} onChange={e=>setsurname(e.target.value)} placeholder={"surname"}/>
      <input type={"text"} value={contactNumber} onChange={e=>setcontactNumber(e.target.value)} placeholder={"contactNumber"}/>
      <input type={"text"} value={departmentID} onChange={e=>setdepartmentID(e.target.value)} placeholder={"departmentID"}/>
      <input type={"text"} value={specializationDetailsID} onChange={e=>setspecializationDetailsID(e.target.value)} placeholder={"specializationDetailsID"}/>
      <input type={"text"} value={experience} onChange={e=>setexperience(e.target.value)} placeholder={"experience"}/>
      <input type={"text"} value={photo} onChange={e=>setphoto(e.target.value)} placeholder={"photo"}/>
      <input type={"text"} value={category} onChange={e=>setcategory(e.target.value)} placeholder={"category"}/>
      <input type={"text"} value={price} onChange={e=>setprice(e.target.value)} placeholder={"price"}/>
      <input type={"text"} value={scheduleDetails} onChange={e=>setscheduleDetails(e.target.value)} placeholder={"scheduleDetails"}/>
      <input type={"text"} value={degree} onChange={e=>setdegree(e.target.value)} placeholder={"degree"}/>
      <input type={"text"} value={rating} onChange={e=>setrating(e.target.value)} placeholder={"rating"}/>
      <input type={"text"} value={address} onChange={e=>setaddress(e.target.value)} placeholder={"address"}/>
      <input type={"text"} value={homepageURL} onChange={e=>sethomepageURL(e.target.value)} placeholder={"homepageURL"}/>
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
      <div>contactNumber: {doctor.contactNumber} </div>
      <div>departmentID: {doctor.departmentID} </div>
      <div>specializationDetailsID: {doctor.specializationDetailsID} </div>
      <div>experience: {doctor.experience} </div>
      {/* <div>photo: {doctor.photo} </div> */}
      <div>category: {doctor.category} </div>
      <div>price: {doctor.price} </div>
      <div>scheduleDetails: {doctor.scheduleDetails} </div>
      <div>degree: {doctor.degree} </div>
      <div>rating: {doctor.rating} </div>
      <div>address: {doctor.address} </div>
      <div>homepageURL: {doctor.homepageURL} </div>
    </>  
    }
    {isModifying ? <><button onClick={onSaveHandler}>Save</button><button onClick={onCancelHandler}>Cancel</button></> : <button onClick={()=>setIsModifying(true)}>Modify</button>}
      <button onClick={()=>deleteDoctorHandler(doctor._id)}>Delete</button>
    </div>
  )
}

export default ViewDoctors