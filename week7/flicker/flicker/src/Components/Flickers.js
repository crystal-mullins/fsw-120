import React from 'react';
import '../App.css'
import gratefuldead3d from './gratefuldead3d.img.png'

function FlickerJam() {
  return(
    <div className='album-info'>
      Grateful Dead Live at Richfield Coliseum on 1994-03-21
      <div className='gd-song-list'>
      <p>1: Tuning - 01:00</p>
      <p>2: Picasso Moon - 07:07</p>
      <p>3: New Speedway Boogie - 07:53</p>
      <p>4: Victim Or The Crime - 09:23</p>
      <p>5: He's Gone - 23:50</p>
      <p>6: Drums - 12:32</p>
      <p>7: Space - 12:13</p>
      <p>8: Turn On Your Lovelight - 05:28</p>
      <p>9: Stella Blue - 08:04</p>
      <p>10: Turn On Your Lovelight - 02:56</p>
      <p>11: Encore Break - 00:38</p>
      <p>12: Liberty - 08:10</p>

      </div>
      
      <div >
     <img src={gratefuldead3d}  alt='gratefuldead3d 'width="400px" height="400px" />
  </div>

    </div>
    
   
           
    
  );
}

export default FlickerJam