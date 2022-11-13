import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import LoginPage from './pages/LoginPage/LoginPage'
import AdminPage from './pages/AdminPage/AdminPage';

const AppRouter = () => {
  const { isLogin } = useSelector(state => state.user)
  return (
    <Routes>
      {!isLogin ? 
        <>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </>  
        :
        <>
          <Route path="/admin" element={<AdminPage />}/>
          <Route path="*" element={<Navigate to="/admin"/>}/>
        </>
    }
    </Routes>
  )
}

export default AppRouter