import React, {Component} from 'react';
import '../App.css'
import FlickerList from '../ComponentsOld/FlickerList'
import flickersData from '../ComponentsOld/FlickerData'

class FlickerForm extends Component{
              constructor(){
              super()
              this.state={
                   authors:'',
                   flickers:'',
                   date:'',
                   flickerBadges: flickersData,
                   handleDelete: this.handleDelete,
                   handleEdit: this.handleEdit
    }
}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }


  handleSubmit = (e) =>{
        console.log(this.state)
    e.preventDefault()
    let newFlickerData= {
        authors: this.state.authors,
        flickers: this.state.flickers,
        date: this.state.date,    
    }
    this.setState(prevState => {
      return({flickerBadges: 
        [ ...prevState.flickerBadges, newFlickerData ],
        authors:'',
        flickers:'',
        date:'',

    })
      
     })
}
handleDelete = (i) => {
  let editedFlickerArray = this.state.flickerBadges
  editedFlickerArray.splice(i, 1)
  this.setState({flickerBadges: editedFlickerArray})
}
 

render(){
  
  return(
   <div>
                <form onSubmit={this.handleSubmit} className="flick-form-wrapper"
                
                >
                    <textarea className="flick-input-box"

                      type="text"
                      name="flickers"
                      placeholder="Let it Shine, Let it Shine, Let it..."
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
                      
                
                <button style={{gridColumn:"span 2", width:"20%", marginLeft:"40%", backgroundColor:"skyblue"}}>Turn On Your Light</button>
            </form>
            <FlickerList 
                flickersData={this.state.flickerBadges}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
                />
    
    </div>
    
  );
}
}
export default FlickerForm
