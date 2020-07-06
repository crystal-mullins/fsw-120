import React, { useState  } from 'react';
// import earthPaint from './elena-mozhvilo-eA32JIBsSu8-unsplash.jpg'

// import axios from 'axios'


function Register() {
    const [firstName, setName ] = useState('')
    const [password, setPassword ] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(value)
        setName(value)
}
    
    // console.log(firstName)
    
  return (
    <div >

      Time to Register
        <form>
           Name:
            <input
                type='text'
                name='firsName'
                // value='firstName'
                onChange={(e) => setName(e.target.value)}
            />
            Password: 
        
            <input 
                type='password'
                name='password'
                // value='firstName'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button> Submit </button>

            
        </form>
        {/* <img src={earthPaint}  alt='earthPaint 'width="300px" height="300px"/>
            name: */}
    </div>
  );
}

export default Register;