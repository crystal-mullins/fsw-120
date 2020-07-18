import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
import { withAuth } from '../providers/AuthProviders'
import flickerimg from './flickerimg1.jpg'
const Navbar = ({handleUserLogout}) => {

  return (
    <div>
      <ul>
        <Link to='/'> Home </Link>
        <Link to='/flickers'> Flickers </Link> 
        <Link to='/login'> Login </Link>
        <button onClick={handleUserLogout}> Logout </button>
      </ul>
      <div className="logo-box">
      <img src={flickerimg}  alt='flickerimg 'width="800px" height="150px" />

      </div>
      
     
    </div>
  );
}

export default withAuth(Navbar)