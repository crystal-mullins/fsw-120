import React, { useState, useEffect } from 'react';


function Register() {
    const [name, setName ] = useState('')
    const [password, setName ] = useState('')
    
  return (
    <div >
      Time to Register
        <form onSubmit={handleSubmit}>
            name:
            <input
                type='text'
                name='firstName'
                value='firstName'
                onChange={(e) => setName(e.target.value)}
            />
            Password: 
        
            <input 
                type='password'
                name='password'
                value='firstName'
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button> Submit </button> */}
        </form>
      
    </div>
  );
}

export default Register;