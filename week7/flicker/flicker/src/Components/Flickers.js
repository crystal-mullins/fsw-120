import React, {Component} from 'react';
import '../App.css'

// import FlickerCard from '../ComponentsOld/FlickerCard'

export default class FlickerForm extends Component{
              constructor(){
              super()
              this.state={
                   authors:'',
                   flickers:'',
                   date:'',
                   flickerCard:[],
                   handleDelete: this.handleDelete,
                   handleEdit: this.handleEdit
    }
}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }


  handleSubmit = (e) =>{
        
    e.preventDefault()
    let newFlickerData= {
        authors: this.state.authors,
        flickers: this.state.flickers,
        date: this.state.date,
       
        
        
            
        
    }
    this.setState({flickerBadges: [ newFlickerData, ...this.state.flickerBadges],
        authors:'',
        flickers:'',
        date:'',
        
        
     })
   

}
handleDelete = (i) => {
  let editedFlickerArray = this.state.flickerBadges
  editedFlickerArray.splice(i, 1)
  this.setState({flickerBadges: editedFlickerArray})
}
 

render(){
  
  return(
   <div >
    
                <form onSubmit={this.handleSubmit} className="flick-form-wrapper"
                
                >
                    <textarea className="flick-input-box"

                      type="text"
                      name="flickers"
                      placeholder="Enlighten us with a flicker!"
                      value={this.state.flickers}
                      onChange={this.handleChange}

/>

                      <input className="author-box"

                      type="text"
                      name="authors"
                      placeholder="author:"
                      value={this.state.authors}
                      onChange={this.handleChange}
                    
                      />
                    
             

                      <input className="date-box"
                      type="date"
                      name="date"
                      placeholder="date:"
                      value={this.state.date}
                      onChange={this.handleChange}
                      
                      />
                      
                
                <button style={{gridColumn:"span 2", width:"20%", marginLeft:"40%"}}>Do not push</button>
            </form>
    
            </div>
    
  );
}
}
