import React from 'react';

import './App.css';

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    // color: "#FF8C88",
    // backgroundColor: "green",
    fontSize: "30px"
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "green"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "orange"
  } else {
    timeOfDay = "night"
    styles.color = "blue"
  }
  
  
  return (
    <h1 style={styles}>Have a wonderful {timeOfDay}!</h1>
  )
}

export default App;
