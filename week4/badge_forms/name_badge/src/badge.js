import React, {Component}from 'react';
import BadgeCard from './BadgeCard'

class FormBadges extends Component{
    constructor(){
      super()
      this.state= {
       
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        PlaceofBirth: "",
        favFood: "",
        nameBadges: []
        
        
      }  
    }
  
    handleChange= (e) => {
      
      const {name, value} = e.target
      this.setState({ [name]: value })
    }

    handleSubmit= (e) => {
          e.preventDefault()
          let newUser= {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email,
          placeofBirth: this.state.placeofBirth,
          favFood: this.state.favFood,
        }
        this.setState({
          nameBadges:[newUser, ...this.state.nameBadges]})
        }     
    
      
      render(){
        console.log(this.state)
          return ( 
            
                <form onSubmit={this.handelSubmit}>

                  <input 
              
                      type="text" 
                      value={this.state.firstName} 
                      name="firstName" 
                      placeholder="First Name" 
                      onChange={this.handleChange} 
                      required={true}
                  />
                
                  
                  <input 
                      type="text" 
                      value={this.state.lastName} 
                      name="lastName" 
                      placeholder="Last Name" 
                      onChange={this.handleChange}
                      required={true} 
                  />
                  <input 
              
                        type="email" 
                        value={this.state.email} 
                        name="email" 
                        placeholder="email" 
                        onChange={this.handleChange}
                        required={true} 
                    />
                    
                    
                    <input 
                        type="number" 
                        value={this.state.number} 
                        name="phoneNumber" 
                        placeholder="Phone Number" 
                        onChange={this.handleChange}
                        required={true} 
                    />
                    <input 
                        
                        type="text" 
                        value={this.state.place} 
                        name="PlaceofBirth" 
                        placeholder="Place of Birth" 
                        onChange={this.handleChange}
                        required={true} 
                    />
                    
                    
                    <input 
                        type="text" 
                        value={this.state.favFood} 
                        name="favFood" 
                        placeholder="Favorite Food" 
                       onChange={this.handelChange}
                    />
                    

                    <textarea Tell is about yourself/>
                    <div>
                    
                    <BadgeCard
                    nameBadges={this.state.nameBadges}
                    handleDelete={this.state.handleDelete}
                    />

                   
             
                   
                    
                    
          
          
                  
                    <hr />
                    <h2>Badge:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your Phone Number: {this.state.phone}</p>
                    <p>Your email: {this.state.email}</p>
                    <p>Your place of birth: {this.state.PlaceofBirth}</p>
                  <p>Your favorite food:{this.state.favFood}</p>
                <p>
                  <button onClick={this.handleSubmit}>Submit</button>
                 </p> 
                                 
                 </div>
                </form>
                  
                  
          )
        };
    }
               

export default FormBadges;
