import React from 'react'
import { useState, useEffect } from 'react'
import { useActions } from '../../store/hooks/useActions'
import styles from './LoginPage.module.css'
import { useSelector, useDispatch } from 'react-redux';

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
const dispatch = useDispatch()
  const {login} = useActions()

  const loginError = useSelector(state => state.error.loginError)
  const isLoginLoading = useSelector(state => state.loading.isLoginLoading)
  const loginHandler = e => {
    setUsername(e.target.value)
  }

  const passwordHandler = e => {
    setPassword(e.target.value)
  }
  
  const buttonHandler = () => {
   login(username, password)
  }
  

  

  return (
    <div className={styles.main}>
      <h1>DenSys.me</h1>
      <div className={styles.form}>
        <input type="text"
        value={username}
        onChange={loginHandler}
        placeholder={"login"}
        />
        <input 
        type="password" 
        value={password} 
        onChange={passwordHandler}
        placeholder={"password"}
        />
        {isLoginLoading ? 
        <button disabled>Loading</button> :
        <button onClick={buttonHandler}>Login</button>
        }
        {
          loginError && (
            <div style={{color: 'red', marginTop: 10}}>{loginError}</div>
          )
        }
      </div>
    </div>
  )
}

export default LoginPage