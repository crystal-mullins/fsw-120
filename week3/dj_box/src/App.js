import React from "react"



class DjBox extends React.Component {
  constructor() {
      super()
      this.state = {
          
        
        box1: "white",
        box2: "white",
        box3: "white",
        box4: "white"
        // box5: 0,
        // box6: 0,

      }
      
      
} 
  


handleClick= () => {
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

//   partyDj= () => {
    
//     this.setState((prevState) => {
//       let color1;
//       let color2;
      
  
//      if(prevState.box1 === "black"){
//        color1="purple"
//      }
//      else if (prevState.box1 === "black"){
//        color1="purple"
//      }
//      if(prevState.box2 === "black"){
//       color2="purple"
//     }
//     else if (prevState.box2 === "black"){
//       color2="purple"
//     }
//   })
// }
    return {
      
      box1:color1,
      box2:color2,
      box3:color3,
      box4:color4
      

    }
    
})
}


render(){
  
return(
  <div>

  <div className="box1"style={{backgroundColor:"black"}}>
    <div style={{width: 500, height: 500, margin: 25, backgroundColor:this.state.box1}}>{this.state.box1}<iframe src="https://archive.org/embed/gd1991-09-14.150163.sbd.cm.miller.flac16" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></div> 
    

   <div  className="box2"style={{width: 500, height: 500, backgroundColor:this.state.box1, margin: 25}} >{this.state.box1}<iframe src="https://archive.org/embed/gd1994-09-27.150128.sennme88.ragosa.miller.sirmick.flac1648" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></div> 

   <div className="box3" style={{width: 500, height: 500, margin: 25, backgroundColor:this.state.box1}} >{this.state.box1}<iframe src="https://archive.org/embed/gd1969-10-25.sbd.miller.flac1644" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></div> 

   <div className="box4" style={{width: 500, height: 500, margin: 25, backgroundColor:this.state.box1}}button onClick={this.handleClick}>B >{this.state.box1}<iframe src="https://archive.org/embed/gd1995-06-25.150028.sbd.dolphinsmile.flac1644" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></div>
   </div> 

  
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