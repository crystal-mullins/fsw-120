import React from 'react'
import Box from '../Boxs/Box'




class PartyDj extends React.Component {
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
                
             if(prevState.box1 === "white"){
                color1="purple"
              }
              else if (prevState.box1 === "black"){
                color1="white"
              }
              if(prevState.box2 === "white"){
                color2="Purple"
              }
              else if (prevState.box2 === "black"){
                color2="white"
              }
              if(prevState.box3 === "white"){
                color3="white"
              }
              else if (prevState.box3 === "black"){
                color3="white"
              }
              if(prevState.box4 === "white"){
                color4="white"
              }
              else if (prevState.box4 === "black"){
                color4="white"
              }
  
  
      return {
        
        box1:color1,
        box2:color2,
        box3:color3,
        box4:color4
        
  
      }
      
  })}
  render(){
      
      return(
          <div> 
             <button 
            onClick={this.handleClick}className="st_dj">
              {this.state.box1}
              Push ME</button>
                      
            
            
            {this.props.children} 
            <Box class="box1" color={this.state.box1} src="https://archive.org/embed/gd1991-09-14.150163.sbd.cm.miller.flac16"/>

            <Box class="box2" color={this.state.box2} src="https://archive.org/embed/gd1994-09-27.150128.sennme88.ragosa.miller.sirmick.flac1648"/>

            <Box class="box3" color={this.state.box3} src="https://archive.org/embed/gd1969-10-25.sbd.miller.flac1644"/>

            <Box class="box4" color={this.state.box4} src="https://archive.org/embed/gd1995-06-25.150028.sbd.dolphinsmile.flac1644"/>
            </div>

            
                    
          
      )
    }
  }

  export default PartyDj;