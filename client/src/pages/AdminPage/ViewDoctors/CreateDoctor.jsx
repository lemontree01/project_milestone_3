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
  const [contactNumber, setcontactNumber] = useState("")
  const [departmentID, setdepartmentID] = useState("")
  const [specializationDetailsID, setspecializationDetailsID] = useState("")
  const [experience, setexperience] = useState("")
  const [photo, setphoto] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState("")
  const [scheduleDetails, setscheduleDetails] = useState("")
  const [degree, setdegree] = useState("")
  const [rating, setrating] = useState("")
  const [address, setaddress] = useState("")
  const [homepageURL, sethomepageURL] = useState("")

  const {createDoctor} = useActions()

  const isGettingDoctorsLoading = useSelector(state => state.loading.isGettingDoctorsLoading)
  const addingDoctorsError = useSelector(state => state.error.addingDoctorsError)
  return (
    <div className={styles.create_doctor}>
      <h3>CreateDoctor</h3>
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
     {
      isGettingDoctorsLoading ?
      <button disabled>Loading...</button> :
      <button onClick={()=>createDoctor({
        login,password,dateOfBirth,IINNumber,IDNumber,name,surname,contactNumber,departmentID,specializationDetailsID,experience,photo,category,price,scheduleDetails,degree,rating,address,homepageURL})}>Create</button>
     }
     {addingDoctorsError && <div>Error{addingDoctorsError}</div>}
    </div>
  )
}

export default CreateDoctor