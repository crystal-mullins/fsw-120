import React, {Component} from 'react'
import BadgeList from './BadgeList'
// import BadgeCard from './BadgeCard'

class FormBadge extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            birthPlace:'',
            favFood:'',
            nameBadges:[],
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
            
        }
        this.setState({nameBadges: [ newUserData, ...this.state.nameBadges]})

    }

    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.state({nameBadges: updatedBadgeArray})
    }
    render(){
        
        return(
            <div className="user_list">
                
                
                <form onSubmit={this.handleSubmit}>
                First Name
                <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                required={true}
                />
                Last Name:
                <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                required={true}
                />
                Phone Number
                <input 
                type="number"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                required={true}
                />
                email address:
                <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required={true}
                />
               
                <button >On Submit</button>

                </form>
                <BadgeList 
                nameBadges={this.state.nameBadges}
                handleDelete={this.state.handleDelete}
                />
               
                

            
                
            </div>
        )
    }
}

export default FormBadge