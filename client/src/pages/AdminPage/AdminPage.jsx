import React, {useState} from 'react'
import ViewDoctors from './ViewDoctors/ViewDoctors';
import ViewPatients from './ViewPatients/ViewPatients';
import { useActions } from './../../store/hooks/useActions';


const AdminPage = () => {
  const [page, setPage] = useState(0)
  const {logout} = useActions()
  return (
    <div>AdminPage
      <button onClick={()=>setPage(0)}>Show doctors</button>
      <button onClick={()=>setPage(1)}>Show patients</button>
      <button onClick={logout}>logout</button>
      {page === 0  && <ViewDoctors />  }
      {page === 1  && <ViewPatients />  }
    </div>
  )
}

export default AdminPage