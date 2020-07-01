import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    
    return (
      <div >
        
        Select your link
        <ul className='nav_wrapper'>
         <Link className='my_nav_link' to='/'> Home </Link>
         <Link className='my_nav_link' to='/about'>About </Link>
         <Link className='my_nav_link' to='/register'>Register </Link>
        </ul>
        </div>

    )
    
}

export default Navbar;