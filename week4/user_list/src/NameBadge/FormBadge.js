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
            nameBadges:[]
        }
    }
    handleChange = (e) => {
   
    // let name = e.target.name
    // let value = e.target.value
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
    render(){
        
        return(
            <div>
                First Name:
                <form onSubmit={this.handleSubmit}>
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
                Birth Place:
                <input
                type="text"
                name="birthPlace"
                value={this.state.birthPlace}
                onChange={this.handleChange}
                />
                Favorite Food
                <input 
                type="text"
                name="favFood"
                value={this.state.favFood}
                onChange={this.handleChange}
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