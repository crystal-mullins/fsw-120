import React from 'react';
import { Link } from 'react-router-dom'
// import './video.mp4'
import wormhole from './wormhole-2514312.jpg'

function Navbar() {
    
    return (
      <div >
        <h1 className='heading'>
          Time Travel Plumbing
        </h1>
  <ol>  
        <li>
         <Link className='my_nav_link' to='/'> Past </Link>
         </li>
         <li>
         <Link className='my_nav_link' to='/about'>Present </Link>
         </li>
         <li>
         <Link className='my_nav_link' to='/register'>Future </Link>
        </li>
  </ol> 
        {/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  </source>

</video> */}
        <img src={wormhole}  alt='wormhole 'width="400px" height="400px"/>

        <h1 className='footer'>
          We stop the mess before it happens!
        </h1>
        </div>

    )
    
}

export default Navbar;