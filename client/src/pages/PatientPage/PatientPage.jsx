import React, {useState} from 'react'
import styles from './PatientPage.module.css'
import { useActions } from './../../store/hooks/useActions';
import { useSelector } from 'react-redux';

const PatientPage = () => {
  const { searchDoctors } = useActions()
  const [query, setQuery] = useState('')
  const searchButtonHandler = () => {
    searchDoctors(query)
  }

  const doctors = useSelector(state => state.admin.doctors)
console.log(doctors)
const categoryHandler = e => {
  console.log(e)
}

  return (
    <div className={styles.main}>
      <input type="text" value={query} onChange={e=>{setQuery(e.target.value)}}/>
      <button onClick={searchButtonHandler}>Search</button>
      <div className={styles.specializations}>
        <div>Ophthalmology</div>
        <div>Pediatrics</div>
        <div>Dermatology</div>
        <div>Anesthesiology</div>
        <div>Psychology</div>
      </div>
      <div className={styles.doctors}>
        {doctors.map(doctor => 
          <div key={doctor._id} className={styles.doctor_card}>
            <div className={styles.field}>
              <div>Full name:&nbsp;</div>
              <div>{doctor.name} {doctor.surname}</div>
            </div>
            <div className={styles.field}>
              <div>Contact number:&nbsp;</div>
              <div>{doctor.contactNumber}</div>
            </div>
            <div className={styles.field}>
              <div>Photo:&nbsp;</div>
              <img src={doctor.photo} alt="No photo" />
            </div>
            <div className={styles.field}>
              <div>Time slots:&nbsp;</div>
              <div>scheduleDetails</div>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default PatientPage