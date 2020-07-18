import React, {Component} from 'react'
import FlickerList from './FlickerList'
import axios from 'axios'

class EditForm extends Component {
    constructor(props){
        super(props)
        this.state={
            authors:'',
            flickers:'',
            date:'',
            flickerCards:[],
            id: this.props.id
            
        }
    }
    handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name] : value})
    }

    handleDelete = (i) => {
        let updatedBadgeArray = this.state.nameBadges
        updatedBadgeArray.splice(i, 1)
        this.state({nameBadges: updatedBadgeArray})
    }
  

       
    handleEdit = (editState, id) => {
        let editedFlickerArray = this.state.flickerCards
        editedFlickerArray.splice(editState, id)

// console.log("edited State", editState)
const {authors, flickers, date,} = editState
    var editedFlicker= {
        authors,
        flickers,
        date
}

axios.put('./flickers/' + id, editedFlicker ).then(res => {
   
    console.log(res)
})
}


    render(){
        console.log("this is flicker edit")
        return(
            <div> 
                
                <form id={this.state.id}  onSubmit={(e)=>{
                    e.preventDefault()
                    this.handleEdit(this.state, 
                     e.currentTarget.id)
                     window.location.reload()}}>
                <input
                className="author-box"
                type="text"
                name="authors"
                placeholder="author:"
                value={this.state.authors}
                onChange={this.handleChange}
               
                />
               
                <input
                className="date-box"
                type="date"
                name="date"
                placeholder="date:"
                value={this.state.date}
                onChange={this.handleChange}
                
                />
               
                <textarea
                className="flick-input-box"
                type="text"
                name="flickers"
                placeholder="Edit flicker:"
                value={this.state.flickers}
                onChange={this.handleChange}
               
                />
               
               
                
                <button id={this.state.id} style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>edit</button>

                </form>
                <FlickerList 
                flickerCards={this.state.flickerCards}
               
                handleEdit={this.state.handleEdit}
                />
                </div>
        )
    };
}

export default EditForm;