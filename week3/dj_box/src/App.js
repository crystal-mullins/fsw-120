import React from "react"
import SmallTime from "./Components/SmallTime/SmallTimeDj"
import './App.css'
import PartyDj from "./Components/PartyDj/PartyDj"


class App extends React.Component {


  render(){

    return(
      <div>
        <SmallTime />
        <PartyDj />

      </div>
    )


  }
    
}

export default App