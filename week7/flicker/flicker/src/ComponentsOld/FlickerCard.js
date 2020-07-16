
import React , {Component}from 'react'
// import EditForm from "./FlickerEdit"
import FlickerForm from './FlickerForm'

class FlickerCard extends Component{
    constructor(props){
        super(props)
        var { index, authors, flickers, date,  handleDelete, handleEdit, id } =this.props
        this.state= {
            index, authors, flickers, date,  handleDelete, handleEdit , id, editing: false
        }
    }
    
  
    render(){
    return(
        <div> 
            <h1 style={{backgroundColor:"aqua"}}>Flickers of Light in the dark</h1>
        <div className="wrapper">


                <p>Flicker of light: {this.state.flicker}</p>
                {console.log("bountyCardState ", this.state)}
                <p>author: {this.state.author}</p>
                <p>date {this.state.date}</p>
                
                
                <button id={this.state.id} onClick={ (e) => this.state.handleDelete(this.state.index,e.target.id)} 
                > Delete Flicker</button>

                <button id={this.state.id} onClick={ (e) => { this.setState({editing: true, id : e.target.id})}} 
                > edit</button>
               
            
            {/* we have to coditionally render the update form here*/}
               {(this.state.editing? <FlickerForm id={this.state.id} index={this.state.index}/>: console.log("not editing"))}
            
            
        </div>
        </div>
    )
    }
}



export default FlickerCard;