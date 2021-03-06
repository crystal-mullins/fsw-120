import React , {Component}from 'react'
import FlickerForm from './FlickerForm'

class FlickerCard extends Component{
    constructor(props){
        super(props)
        var { index, authors, flickers, date,  handleDelete, handleEdit, id } =this.props
        this.state= {
            index, authors, flickers, date,  handleDelete, handleEdit , id, editing: false
        }
    }
    handleSubmit = (newObject) =>{
console.log(newObject)

        this.setState( {
           
            authors:newObject.authors,
            flickers:newObject.flickers,
            date:newObject.date, 
            editing:false   
         })
    }

    
  
    render(){
    return(
        <div> 
            <h1 className='card-banner'>Flickers of Light in the dark</h1>
        <div className="card-wrapper">

                <div className='flicker-card'>

                <p>Flicker of light: {this.state.flickers}</p>
                
                <p>author: {this.state.authors}</p>
                <p>date {this.state.date}</p>


                </div>
               
                
                
                <button style={{gridColumn:"span 2", width:"20%", marginLeft:"20%", backgroundColor:"skyblue"}} id={this.state.id} onClick={ (e) => this.state.handleDelete(this.state.index,e.target.id)} 
                > Delete</button>

                <button style={{gridColumn:"span 2", width:"20%", marginRight:"20%", backgroundColor:"skyblue"}}id={this.state.id} onClick={ (e) => { this.setState({editing: true, id : e.target.id})}} 
                > edit</button>
               
            
            {/* we have to coditionally render the update form here*/}
               {(this.state.editing? <FlickerForm 
               id={this.state.id} 
               index={this.state.index}
               handleSubmit={this.handleSubmit}
               />: <p></p>)}
            
            
        </div>
        </div>
    )
    }
}



export default FlickerCard;