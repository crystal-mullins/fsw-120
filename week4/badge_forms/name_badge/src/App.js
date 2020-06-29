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
      
    }

    handleClick1= () => {
      this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
    }
  })
}
handleChange = (e) => {
   
  const {name, value} = e.target
  this.setState({ [name] : value})
  
 

  }

  handleSubmit = (e) =>{
      e.preventDefault()
      let newUserData= {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email,
          birthPlace: this.state.birthPlace,
          favFood: this.state.favFood
      }
      this.setState({nameBadges: [ newUserData, ...this.state.nameBadges]})

  }

  handleDelete = (i) => {
      let updatedBadgeArray = this.state.nameBadges
      updatedBadgeArray.splice(i, 1)
      this.state({nameBadges: updatedBadgeArray})
  }


handleChange= (e) => {
      const {name, value, type, checked} = e.target
      type === "checkbox" ? this.setState({
      [name]: checked }) : this.setState({ [name]: value})
}

componentDidMount= () => {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1500)
    }

    render=()=> {
      let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
      let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return ( 
          <form>
            <label>First Name</label>
            <input 
            
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    onChange={this.handleSubmit} 
                />
              <label>Last Name</label>
                
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    onChange={this.handleSubmit} 
                />
                  <h1>{this.state.firstName} {this.state.lastName}</h1>
                  <div>
                  {this.state.isLoading ? <h1>Loading...</h1> :
                        <Conditional />}
                  
                  <button onClick={this.handleClick}>{buttonText}</button>
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
