import React, {useState} from 'react'
import ViewDoctors from './ViewDoctors/ViewDoctors';
import ViewPatients from './ViewPatients/ViewPatients';
import { useActions } from './../../store/hooks/useActions';
import styles from "./AdminPage.module.css"


const AdminPage = () => {
  const [page, setPage] = useState(0)
  const {logout} = useActions()
  return (
    <div className={styles.main}>
      <p>AdminPage</p>
      <div className={styles.button}>
      <button onClick={()=>setPage(0)}>Show doctors</button>
      <button onClick={()=>setPage(1)}>Show patients</button>
      <button onClick={logout}>logout</button>
      </div>
      
      {page === 0  && <ViewDoctors />  }
      {page === 1  && <ViewPatients />  }
    </div>
  )
}

export default AdminPage