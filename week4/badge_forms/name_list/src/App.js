import React, {Component}from 'react';
import Conditional from "./conditional"
import './App.css';


class App extends Component{
    constructor(){
      super()
      this.state= {
        isLoading: true,
        isLoggedIn: false,
        firstName: "",
        lastName: "",
        isFriendly: false,
        member: "",
        favColor: "blue"
      }
      this.handelClick = this.handelClick.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handelClick(){
      this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
    }
  })
}
handleChange(event) {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? this.setState({
      [name]: checked }) : this.setState({ [name]: value
  })
}

componentDidMount(){
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1500)
    }

    render(){
      let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
      let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return ( 
          <form>
            <input 
            
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                  <h1>{this.state.firstName} {this.state.lastName}</h1>
                  <div>
                  {this.state.isLoading ? <h1>Loading...</h1> :
                        <Conditional />}
                  
                  <button onClick={this.handelClick}>{buttonText}</button>
                        <h2>{displayText}</h2>
                        </div>
                      
                  
                  <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="member"
                        value="Non-Member"
                        checked={this.state.member === "Non-Member"}
                        onChange={this.handleChange}
                    /> Non-Member
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="member"
                        value="Gold Member"
                        checked={this.state.member === "Gold Member"}
                        onChange={this.handleChange}
                    /> Member
                </label>
                
                <div>
                {this.handleChange}
                <h2>You are a {this.state.member}</h2>
                </div>
                <textarea value={"Some default value"}/>

                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h2>Your favorite color is {this.state.favColor}</h2>
          </form> 
        

        )    
        
    }
  }
   

export default App
