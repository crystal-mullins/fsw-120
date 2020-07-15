// import React, {Component} from './node_modules/react'

import React, {Component} from 'react'
import FlickerList from './Components/FlickerList'
// import axios from './node_modules/axios'



export default class FlickerForm extends Component {
    constructor(){
        super()
        this.state={
            authors:'',
            flickers:'',
            date:'',
            flickBadges:[],
            handleDelete: this.handleDelete,
            handleEdit: this.handleEdit
        }
    }
    // componentDidMount(){
    //     axios.get('/bountys')
    //     .then(res =>{
    //         console.log("res.data", res.data)
    //         this.setState({
    //             bountyBadges:res.data
    //         })
    //     })
    // }
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
            <div> 
                
                <form className="wrapper" onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="authors"
                placeholder="author:"
                value={this.state.authors}
                onChange={this.handleChange}
               
                />
               
               <textarea

                type="text"
                name="flickers"
                placeholder="Enlighten us with a flicker!"
                value={this.state.flickers}
                onChange={this.handleChange}

              />


                <input
                type="date"
                name="date"
                placeholder="date:"
                value={this.state.date}
                onChange={this.handleChange}
                
                />
                 
                
                <button style={{gridColumn:"span 2", width:"50%", marginLeft:"25%"}}>On Submit</button>

                </form>
                <FlickerList 
                flickerBadges={this.state.flickerBadges}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
                
                />
                </div>
        )
    }
}

