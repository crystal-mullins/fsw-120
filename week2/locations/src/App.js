import React from 'react';
import Spot from './Spots';
import './App.css';

function App() {
      let spot = [
          {
            place: "Meridian, Idaho",
            price: 40,
            timeToGo: "Spring"
          },{
            place: "Cancun",
            price: 900,
            timeToGo: "Winter"
          },{
            place: "China",
            price: 1200,
            timeToGo: "Fall"
          },{
            place: "Russia",
            price: 1100,
            timeToGo: "Summer"
          },{
            place: "Lebanon",
            price: 400,
            timeToGo: "Spring"
          }
]

  
  
  return (
    
      
    <div> 

            {spot.map(spot => { 

              return(
            <Spot
              cardColor={spot.timeToGo === "Spring"?
              "green": 
               spot.timeToGo === "Summer"? 
             "red": 
               spot.timeToGo === "Fall"? 
             "brown":
               spot.timeToGo === "Winter"? 
              "beige": console.log(spot.timeToGo)
          }

              place={spot.place}
              price= {spot.price}
              timeToGo= {spot.timeToGo}
            />)})}



            
    
    </div>
  
    
  )
}

export default App;

