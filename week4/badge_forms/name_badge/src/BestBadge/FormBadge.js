import React, {Component} from 'react'
import BadgeList from './BadgeList'


class FormBadge extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            birthPlace:'',
            favoriteFood:'',
            nameBadges:[],
            textArea:'', 
            handleDelete: this.handleDelete
        }
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
            favoriteFood: this.state.favoriteFood,
            textArea: this.state.textArea,
            
            
        }
        this.setState({nameBadges: [ newUserData, ...this.state.nameBadges],
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            birthPlace:'',
            favoriteFood:'',
            textArea:'' })
        

    }
//     handleClearForm= (e) => {
//         // Logic for resetting the form
//         e.preventDefault();
//         this.setState({ 
//             firstName:'',
//             lastName:'',
//             phone:'',
//             email:'',
//             birthPlace:'',
//             favFood:'',
//             nameBadges:[],
//             textArea:'' 
//         },
//       )
// }
    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.setState({nameBadges: updatedBadgeArray})
    }
    render(){
        
        return(
            <div> 
                
                <form className="wrapper" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="firstName"
                placeholder="First Name:"
                value={this.state.firstName}
                onChange={this.handleChange}
                pattern=".{3,}" 
                required title="Minimum 3 characters required"
                />
               
                <input
                type="text"
                name="lastName"
                placeholder="Last Name:"
                value={this.state.lastName}
                onChange={this.handleChange}
                pattern=".{3,}" 
                required title="Minimum 3 characters required"
                />
               
                <input 
                type="tel"
                name="phone"
                placeholder="Phone Number:"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
                value={this.state.phone}
                onChange={this.handleChange}
                required={true}
                />
               
                <input
                type="email"
                name="email"
                placeholder="email:"
                value={this.state.email}
                onChange={this.handleChange}
                required={true}
                />
               
                <input
                type="text"
                name="birthPlace"
                placeholder="Birth Place:"
                value={this.state.birthPlace}
                onChange={this.handleChange}
                pattern=".{3,}" 
                required title="Minimum 3 characters required"
                />
               
                <input 
                type="text"
                name="favoriteFood"
                placeholder="Favorite Food:"
                value={this.state.favoriteFood}
                onChange={this.handleChange}
                pattern=".{3,}" 
                required title="Minimum 3 characters required"/>

                
                <textarea 
                name="textArea"
                value={this.state.textArea}
                onChange={this.handleChange}style={{gridColumn:"span 2"}} placeholder="Tell us about yourself"
                pattern=".{3,}" 
                required title="Minimum 3 characters required"></textarea>
        
                
                <button style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>On Submit</button>

                </form>
                <BadgeList 
                Badges={this.state.nameBadges}
                handleDelete={this.state.handleDelete}
                />
               
                

            
                
            </div>
        )
    }
}

export default FormBadge