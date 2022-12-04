import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage'
import AdminPage from './pages/AdminPage/AdminPage';
import PatientPage from './pages/PatientPage/PatientPage';

const AppRouter = () => {
  const { isLogin, role } = useSelector(state => state.user)
  console.log(role)
  return (
    <Routes>
      {!isLogin ? 
        <>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </>  
        :
        role === 'admin' ? 
        <>
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="*" element={<Navigate to="/admin"/>}/>
        </>
        :
        <>
          <Route path="/patient" element={<PatientPage/>}/>
          <Route path="*" element={<Navigate to="/patient"/>}/>
        </>
    }
    </Routes>
  )
}

export default AppRouter