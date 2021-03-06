import React, {Component} from 'react'


export default class FlickerForm extends Component {
    constructor(){
        super()
        this.state={
            authors:'',
            flickers:'',
            date:'',
            flikerCard:[],
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
       
         this.props.handleSubmit(newFlickerData)
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
    
                </div>
        )
    }
}

