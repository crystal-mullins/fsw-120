import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0

        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        
    }
    
  
         
    handleClick() {
      this.setState((prevState) => {
    
        return {
          num1:  Math.floor(Math.random() * 6),
        
        

        
          num2:  Math.floor(Math.random() * 6),
        
      
          num3:  Math.floor(Math.random() * 6),
          num4:  Math.floor(Math.random() * 6),
          num5:  Math.floor(Math.random() * 6)
          
        }  
        

      })
        
     }
     handleClick2() {
       
      this.setState(prevState => {
        return {
          num2:  Math.floor(Math.random() * 6)
    //       // num2:  Math.floor(Math.random() * 6),
    //       // num3:  Math.floor(Math.random() * 6),
    //       // num4:  Math.floor(Math.random() * 6),
    //       // num5:  Math.floor(Math.random() * 6),
          
          
        } 

      })
        
      }
     
    // handleClick() {
    //   this.setState(prevState => {
    //     return {
    //       num2:  Math.floor(Math.random() * 6),
          
          
    //     } 

    //   })
        
    // }
    handleClick3() {
      this.setState(prevState => {
        return {
          num3:  Math.floor(Math.random() * 6),
          
          
        } 

      })
        
    }
    handleClick4() {
      this.setState(prevState => {
        return {
          num4:  Math.floor(Math.random() * 6),
          
          
        } 

      })
        
    }
    handleClick5() {
      this.setState(prevState => {
        return {
          num5:  Math.floor(Math.random() * 6),
          
          
        } 

      })
        
    }
    
    render() {
        return (
            <div>
                 <div className="num1">{this.state.num1}
                 <button onClick={this.handleClick}>ROLL THE DICE!</button></div>
                
                <div className="num2">{this.state.num2}<button onClick={this.handleClick2}>ROLL THE 2!</button></div>
                

                <div className="num3">{this.state.num3}<button onClick={this.handleClick3}>ROLL THE DICE!</button></div>
                

                <div className="num4">{this.state.num4}<button onClick={this.handleClick4}>ROLL THE DICE!</button></div>
                

                <div className="num5">{this.state.num5}<button onClick={this.handleClick5}>ROLL THE DICE!</button></div>

                
 
            </div>
        )
    }
}

export default DiceBox

