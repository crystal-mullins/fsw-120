import React, { useState, useEffect } from 'react';
import { withAuth } from '../providers/AuthProviders'

// handleAuthLogin, getToken, userToken

const Login = ({ imGlobalFunc }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    // getToken()
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    // handleAuthLogin ()
  }




  return (
  
    <div>
      
      <form onSubmit={handleSubmit}>
        User Name:
        <input 
          type='text'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        Password:
        <input 
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Login </button>
      </form>
    </div>
  );
}

export default withAuth(Login)