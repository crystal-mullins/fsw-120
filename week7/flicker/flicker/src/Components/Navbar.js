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
       

        <div>
        <button onClick={handleUserLogout}style={{gridColumn:"span 2", width:"10%", marginLeft:"0%", backgroundColor:"skyblue"}}> Logout </button>

        </div>
      </ul>
      <div className="logo-box">
      <img src={flickerimg}  alt='flickerimg 'width="800px" height="250px" />

      </div>
      <div>
      <iframe src="https://archive.org/embed/gd1994-03-21.140296.set2.dsbd.wise.miller.clugston.flac1644" width="500" height="30" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

      </div>
      
    </div>
  );
}

export default withAuth(Navbar)