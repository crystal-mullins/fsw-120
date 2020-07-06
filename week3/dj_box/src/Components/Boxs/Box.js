import React, {Component} from 'react'

class Boxs extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    render(){
        return(
            
        <div className={this.props.class}
            style={{backgroundColor:"black"}}>
            <div 
            style={{width: 500, height: 200, margin: 25, backgroundColor:this.props.color}}>{this.props.color}
            
            <iframe 
            src={this.props.src} width="400" height="40" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
            
            </div> 
        
        </div>
        )
    }
}

export default Boxs