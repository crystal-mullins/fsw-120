import React from "react"
import Box from "./Components/Boxs/Box"



class DjBox extends React.Component {
  constructor() {
      super()
      this.state = {
        box1: "white",
        box2: "white",
        box3: "white",
        box4: "white",
        
      }
      
      
} 
  
handleClick = () => {
            console.log("clickevent")
            this.setState((prevState) => {
              let color1;
              let color2;
              let color3;
              let color4;
              
  
    return (

      <div>
      box1: "blue"
      {/* color1;
      color2;
      color3;
      color4; */}
      
      </div>

    )
    
})
}


render(){
  
return(
  <div>

  
<Box class="box1" color={this.state.box1} src="https://archive.org/embed/gd1991-09-14.150163.sbd.cm.miller.flac16"/>

<Box class="box2" color={this.state.box2} src="https://archive.org/embed/gd1994-09-27.150128.sennme88.ragosa.miller.sirmick.flac1648"/>

<Box class="box3" color={this.state.box3} src="https://archive.org/embed/gd1969-10-25.sbd.miller.flac1644"/>

<Box class="box4" color={this.state.box4} src="https://archive.org/embed/gd1995-06-25.150028.sbd.dolphinsmile.flac1644"/>


  
  
    {/* <div className="buttonparty">{this.state.box1}<button onClick={this.partyDj}>Button</button></div>

    <div className="buttonprofessional1">{this.state.box1}<button onClick={this.handleClick}>Button</button></div>

    <div className="buttonprofessional2">{this.state.box1}<button onClick={this.handleClick}>Button</button></div>

    <div className="buttonbigTime">{this.state.box1}<button onClick={this.handleClick}>Button</button></div> */}

    <div className="button1">{this.state.box1}<button onClick={this.handleClick}>Button</button></div>
  </div>


    // <div className="num5">{this.state.box1}<button onClick={this.handleClick}>ROLL THE DICE!</button></div>

)
} 

}

export default DjBox