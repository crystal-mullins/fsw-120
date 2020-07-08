
import React, {Component}from 'react';
// import Answer from './Answer'
import "./styles/Styles.css";
import Sum1 from './AddButton'
import Subtract from './SubtractionButton'
import Divide from './DivideButton'
import Multiply from './MultiplyButton'


class CalculatorForm extends Component{
    constructor(){
      super()
      this.state= {
          number1: "",
          number2: "",
          operation:""
        
        
      }  
    }
  
    handleChange= (e) => {
      
      const {name, value} = e.target
      this.setState({ [name]: value })
    }

    // handleSubmit= (e) => {
    //       e.preventDefault()
    //       let newCalculation= {
    //       inputBox1: this.state.inputBox1,
    //       inputBox2: this.state.inputBox2,
          
    //     }
    //     this.setState({
    //       Answer:[newCalculation, ...this.state.Answer]})
    //     }     
    
      
      render(){
        console.log(this.state)
          return ( 
            
                <form className="form-wrapper">
                  Enter Number:
                  <input 

                      type="number" 
                      value={this.state.number1} 
                      name="number1" 
                      placeholder="" 
                      onChange={this.handleChange} 
                      required={true}
                  />
                
                  Enter Number:
                  <input 
                       type="number" 
                       value={this.state.number2} 
                       name="number2" 
                       placeholder="" 
                       onChange={this.handleChange} 
                       required={true}
                  />
                  
                    <span className="button-wrap">
                    Select Operator:

                        <button onClick={(e)=> {
                          e.preventDefault()
                          this.setState({
                            operation:"add"
                          })}}
                        className="AddButton" >
                          Add
                        </button>

                        <button  onClick={(e)=> {
                          e.preventDefault()
                          this.setState({
                            operation:"subtract"
                          })}}
                        className="SubtractionButton">
                          Subtract
                        </button>

                        <button  onClick={(e)=> {
                          e.preventDefault()
                          this.setState({
                            operation:"divide"
                          })}}
                        className="DivideButton" >
                          Divide
                        </button>

                        <button  onClick={(e)=> {
                          e.preventDefault()
                          this.setState({
                            operation:"multiply"
                          })}}
                        className="MultiplyButton" >Multiply
                        </button>
                    </span>
                  
                 
                 
                    
                    {/* <Answer
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.state.handleDelete} />*/} 
                   
                    <hr />
                    <h2>Answer</h2>
                    <p>your calculation is:</p> 
                    <p>{this.state.number1}  
                    {this.state.operation === "add" ? " + " : //add
                     this.state.operation === "subtract" ? " - " : 
                     this.state.operation === "divide" ? " / " : 
                     this.state.operation === "multiply" ? " * " : 
                     "   " //space when not calculating
                    } 




                    {this.state.number2}</p>
                   
                    {this.state.operation === "add" ? 
                    <Sum1 
                    number1={this.state.number1}
                    number2={this.state.number2} /> :
                    this.state.operation === "subtract" ? 
                    <Subtract 
                    number1={this.state.number1}
                    number2={this.state.number2} /> :
                    this.state.operation === "divide" ? 
                    <Divide 
                    number1={this.state.number1}
                    number2={this.state.number2} />:
                    this.state.operation === "multiply" ? 
                    <Multiply
                    number1={this.state.number1}
                    number2={this.state.number2} />:
                    

                     console.log("notadding")
                     }


                    
                 
                 
                                 
                 
                </form>
                  
                  
          )
        };
    }
               

export default CalculatorForm;
