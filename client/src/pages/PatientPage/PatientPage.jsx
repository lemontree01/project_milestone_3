import React, { useState } from "react";
import styles from "./PatientPage.module.css";
import { useActions } from "./../../store/hooks/useActions";
import { useSelector } from "react-redux";

const PatientPage = () => {
  const { searchDoctors, sendAppointment, logout } = useActions();
  const [query, setQuery] = useState("");
  const searchButtonHandler = () => {
    searchDoctors(query);
  };

  const [currentDoctorId, setCurrentDoctorId] = useState("");
  const doctors = useSelector((state) => state.admin.doctors);
  console.log(doctors);


  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentSurname, setAppointmentSurname] = useState("");
  const [appointmentContactDetails, setAppointmentContactDetails] =
    useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [isAppointmentMade, setIsAppointmentMade] = useState(false);

  const categoryButtonHandler = category => {
    searchDoctors(category);
  }

  return (
    <div className={styles.main}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={searchButtonHandler}>Search</button>
      <button onClick={logout}>logout</button>
      <div className={styles.specializations}>
        <div onClick={()=>categoryButtonHandler("Ophthalmology")}>Ophthalmology</div>
        <div onClick={()=>categoryButtonHandler("Pediatrics")}>Pediatrics</div>
        <div onClick={()=>categoryButtonHandler("Dermatology")}>Dermatology</div>
        <div onClick={()=>categoryButtonHandler("Anesthesiology")}>Anesthesiology</div>
        <div onClick={()=>categoryButtonHandler("Psychology")}>Psychology</div>
      </div>
      {isAppointmentMade && (
        <div>
          Confirm an appointment?
          <div>
            <div className="">name</div>
            <div className="">
              <input
                type="text"
                placeholder="name"
                value={appointmentName}
                onChange={(e) => setAppointmentName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="">surname</div>
            <div className="">
              <input
                type="text"
                placeholder="surname"
                value={appointmentSurname}
                onChange={(e) => setAppointmentSurname(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="">contact details</div>
            <div className="">
              <input
                value={appointmentContactDetails}
                onChange={(e) => setAppointmentContactDetails(e.target.value)}
                type="text"
                placeholder="contact details"
              />
            </div>
          </div>
          <div>
            <div className="">appointment time</div>
            <div className="">
              <input
                value={appointmentTime}
                type="text"
                placeholder="appointment time"
                onChange={e=>setAppointmentTime(e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => {
            sendAppointment(appointmentName, appointmentSurname, appointmentContactDetails, appointmentTime, currentDoctorId );
            setIsAppointmentMade(false)

          }}>Confirm</button>
          <button onClick={() => setIsAppointmentMade(false)}>Cancel</button>
        </div>
      )}
      {!isAppointmentMade && (
        <div className={styles.doctors}>
          {doctors.map((doctor) => (
            <div key={doctor._id} className={styles.doctor_card}>
              <div className={styles.field}>
                <div>Full name:&nbsp;</div>
                <div>
                  {doctor.name} {doctor.surname}
                </div>
              </div>
              <div className={styles.field}>
                <div>Category:&nbsp;</div>
                <div>
                  {doctor.specializationDetailsID}
                </div>
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
                <div>{doctor.scheduleDetails}</div>
              </div>
              <button
                onClick={() => {
                  setIsAppointmentMade(true);
                  setCurrentDoctorId(doctor._id);
                  setAppointmentTime(doctor.scheduleDetails);
                }}
              >
                Make an appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientPage;
