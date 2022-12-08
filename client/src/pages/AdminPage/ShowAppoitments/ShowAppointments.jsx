import React, {useEffect} from 'react'
import { useActions } from './../../../store/hooks/useActions';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ShowAppointments.module.css'

const ShowAppointments = () => {
  const {getAppointments} = useActions()
  useEffect(() => {
    getAppointments()
  }, [])
  const {appointments} = useSelector(state => state.admin)
  console.log(appointments)
  return (
    <div className={styles.main}>
      {appointments.map(a => <div className={styles.a} key={a._id}>
        <div>name: {a.name}</div>
        <div>surname: {a.surname}</div>
        <div>contact details: {a.contactDetails}</div>
        <div>appointmentTime: {a.appointmentTime}</div>
      </div>)}
    </div>
  )
}

export default ShowAppointments