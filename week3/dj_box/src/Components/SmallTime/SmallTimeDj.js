import React from 'react'





class SmallTime extends React.Component {
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
                color1="black"
              }
              else if (prevState.box1 === "black"){
                color1="white"
              }
              if(prevState.box2 === "white"){
                color2="black"
              }
              else if (prevState.box2 === "black"){
                color2="white"
              }
              if(prevState.box3 === "white"){
                color3="black"
              }
              else if (prevState.box3 === "black"){
                color3="white"
              }
              if(prevState.box4 === "white"){
                color4="black"
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
          <div> {this.props.children} </div>
          
      )
    }
  }

  export default SmallTime;