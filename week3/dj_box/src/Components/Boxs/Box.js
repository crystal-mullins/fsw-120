import React, {Component} from 'react'
import './dj_boxStyle.css'


class Boxs extends Component {
    constructor(){
        super()
        this.state={


            
        }
    }
    render(){
        return(
            
            <div className="box">
            <div className={this.props.class}
            style={{backgroundColor:"black"}}>
            <div 
            style={{width: 420, height: 200, margin: 25, backgroundColor:this.props.color}}>{this.props.color}
            
            <iframe 
            src={this.props.src} width="400" height="40" frameBorder="0" title='show1'></iframe>
            
            </div> 

            </div>
        
        
        </div>
        )
    }
}

export default Boxs