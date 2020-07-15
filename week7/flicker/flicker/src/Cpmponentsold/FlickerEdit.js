import React, {Component} from './node_modules/react'
import FlickerList from './Components/FlickerList'
// import axios from './node_modules/axios'

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

       
    handleEdit = (editState, id) => {
        let editedFlickerArray = this.state.flickerCards
console.log("edited State", editState)
const {authors, flickers, date,} = editState
    var editedFlicker= {
        authors,
        flickers,
        date
}

// axios.put('./bountys/' + id, updatedBounty ).then(res => {
   
//     console.log(res)
// })
}


    render(){
        
        return(
            <div> 
                
                <form id={this.state.id} className="wrapper" onSubmit={(e)=>{
                    e.preventDefault()
                    this.handleEdit(this.state, 
                     e.currentTarget.id)
                     window.location.reload()}}>
                <input
                type="text"
                name="authors"
                placeholder="author:"
                value={this.state.authors}
                onChange={this.handleChange}
               
                />
               
                <input
                type="date"
                name="date"
                placeholder="date:"
                value={this.state.date}
                onChange={this.handleChange}
                
                />
               
                <textarea
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