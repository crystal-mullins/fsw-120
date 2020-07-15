import React from 'react';
import { Link } from 'react-router-dom'
import { withAuth } from '/providers/AuthProviders'

const Navbar = ({handleUserLogout}) => {

  return (
    <div>
      <ul>
        <Link to='/'> Home </Link>
        <Link to='/flickers'> Flickers </Link> 
        <Link to='/login'> Login </Link>
        <button onClick={handleUserLogout}> Logout </button>
      </ul>
    </div>
  );
}

export default withAuth(Navbar)