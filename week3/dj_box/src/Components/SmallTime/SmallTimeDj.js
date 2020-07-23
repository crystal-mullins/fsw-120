import React from 'react'
import Box from '../Boxs/Box'
import './SmallTime.css'
import gratefuldead3D from './gratefuldead3d.img.png'

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
} })}

  handleChange = () => {
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
  } })}
  handleChangeColorBlueOne = () => {
    console.log("clickevent")
    this.setState((prevState) => {
      let color1;
      let color2;
      let color3;
      let color4;
      
   if(prevState.box1 === "purple"){
      color1="white"
    }
    else if (prevState.box1 === "black"){
      color1="white"
    }
    if(prevState.box2 === "purple"){
      color2="white"
    }
    else if (prevState.box2 === "white"){
      color2="white"
    }
    if(prevState.box3 === "white"){
      color3="blue"
    }
    else if (prevState.box3 === "black"){
      color3="blue"
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
} })}

handleChangeColorblueTwo = () => {
  console.log("clickevent")
  this.setState((prevState) => {
    let color1;
    let color2;
    let color3;
    let color4;
    
 if(prevState.box1 === "purple"){
    color1="white"
  }
  else if (prevState.box1 === "black"){
    color1="white"
  }
  if(prevState.box2 === "purple"){
    color2="white"
  }
  else if (prevState.box2 === "black"){
    color2="white"
  }
  if(prevState.box3 === "blue"){
    color3="white"
  }
  else if (prevState.box3 === "black"){
    color3="white"
  }
  if(prevState.box4 === "white"){
    color4="blue"
  }
  else if (prevState.box4 === "black"){
    color4="blue"
  }
  return {

    box1:color1,
    box2:color2,
    box3:color3,
    box4:color4
} })}

// big one
bohcOne = () => {
  console.log("clickevent big one")
  this.setState((prevState) => {
    let color1;
    let color2;
    let color3;
    let color4;
    
 if(prevState.box1 === "black"){
    color1="white"
  }
  else if (prevState.box1 === "black"){
    color1="pink"
  }
  if(prevState.box2 === "black"){
    color2="white"
  }
  else if (prevState.box2 === "white"){
    color2="white"
  }
  if(prevState.box3 === "white"){
    color3="white"
  }
  else if (prevState.box3 === "black"){
    color3="white"
  }
  if(prevState.box4 === "blue"){
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
} })}

bohcTwo = () => {
  console.log("clickevent big two")
  this.setState((prevState) => {
    let color1;
    let color2;
    let color3;
    let color4;



    if(prevState.box3 === "white"){
      color1="white"
    }
    else if (prevState.box3 === "white"){
      color1="white"
    }
    if(prevState.box4 === "white"){
      color2="white"
    }
    else if (prevState.box4=== "white"){
      color2="white"
    }
    if(prevState.box3 === "white"){
      color3="white"
    }
    else if (prevState.box3 === "white"){
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
} })}

bohcThree = () => {
  console.log("clickevent")
  this.setState((prevState) => {
    let color1;
    let color2;
    let color3;
    let color4;
    
    if(prevState.box1 === "white"){
      color1="pink"
    }
    else if (prevState.box1 === "pink"){
      color1="white"
    }
    if(prevState.box2 === "white"){
      color2="pink"
    }
    else if (prevState.box2 === "pink"){
      color2="white"
    }
    if(prevState.box3 === "white"){
      color3="pink"
    }
    else if (prevState.box3 === "pink"){
      color3="white"
    }
    if(prevState.box4 === "white"){
      color4="pink"
    }
    else if (prevState.box4 === "pink"){
      color4="white"
    }


 
  return {

    box1:color1,
    box2:color2,
    box3:color3,
    box4:color4
} })}

bohcFour = () => {
  console.log("clickevent")
  this.setState((prevState) => {
    let color1;
    let color2;
    let color3;
    let color4;
    
 if(prevState.box1 === "white"){
    color1="skyblue"
  }
  else if (prevState.box1 === "skyblue"){
    color1="white"
  }
  if(prevState.box2 === "white"){
    color2="red"
  }
  else if (prevState.box2 === "red"){
    color2="white"
  }
  if(prevState.box3 === "white"){
    color3="yellow"
  }
  else if (prevState.box3 === "yellow"){
    color3="white"
  }
  if(prevState.box4 === "white"){
    color4="violet"
  }
  else if (prevState.box4 === "violet"){
    color4="white"
  }
  return {

    box1:color1,
    box2:color2,
    box3:color3,
    box4:color4
} })}
      

  render(){
      
      return(
          <div className='buttons'> 
          
            {/* Small time */}
             <button 
            onClick={this.handleClick}className="st_dj">
              {this.state.box1}
              turn Boxs Black</button>
              <button 

            // party dj

            onClick={this.handleChange}className="party_dj">
              {this.state.box1}{this.state.box2}
              Turn box 1 and 2 Pruple</button>

          {/* professional dj */}

              <button 
            onClick={this.handleChangeColorBlueOne}className="pro_dj">
             {this.state.box3}
              Turn Box 3 Blue</button>

              <button
              onClick={this.handleChangeColorblueTwo}className="prof_dj">
              {this.state.box4}
              Turn Box 4 Blue</button>


              {/* Big Time dj  */}
                      
            
              <button 
            onClick={this.bohcOne}className="big_one_dj">
             {this.state.box1}
             {this.state.box2}
             {this.state.box3}
             {this.state.box4}

              Turn bottom Box's white</button>

              <button
              onClick={this.bohcTwo}className="big_two_dj">
              {this.state.box1}
             {this.state.box2}
             {this.state.box3}
             {this.state.box4}

              Turn top 2 Box 2 white</button> <button 

              onClick={this.bohcThree}className="big_three_dj">
             {this.state.box3}
              Turn all Box  pink</button>

              <button
              onClick={this.bohcFour}className="big_four_dj">
              {this.state.box4}
              Multicolor Boxs </button>


              <div>
              {this.props.children} 
            <Box class="box1" color={this.state.box1} src="https://archive.org/embed/gd1991-09-14.150163.sbd.cm.miller.flac16"/>

            <Box class="box2" color={this.state.box2} src="https://archive.org/embed/gd1994-09-27.150128.sennme88.ragosa.miller.sirmick.flac1648"/>

            <Box class="box3" color={this.state.box3} src="https://archive.org/embed/gd1969-10-25.sbd.miller.flac1644"/>

            <Box class="box4" color={this.state.box4} src="https://archive.org/embed/gd1995-06-25.150028.sbd.dolphinsmile.flac1644"/>
              </div>


           

          <div>

          <img src={gratefuldead3D}  alt='gratefuldead3d.img.png 'width="420px" height="100px" />  </div>
            </div>

            
                    
          
      )
    }
  }

  export default SmallTime;