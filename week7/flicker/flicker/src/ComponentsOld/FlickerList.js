
import React, {Component} from 'react'
import FlickersCard from './FlickerCard'
// import flickersData from './FlickerData'

// import FormBadge from './FormBadge'

class FlickerList extends Component {
    

    
    render(){
        console.log(this.props)
        
        const mappedCards = this.props.flickersData.map( (card, i) => {
            return(
                < FlickersCard
                key={i}
                index={i}
                authors={card.authors}
                flickers={card.flickers}
                date={card.date}

                handleDelete={this.props.handleDelete}
                
                handleEdit={this.props.handleEdit}
                id={card._id}
                
                />
            )
        })
        return(
                <div>
                    
                    {mappedCards}
            </div>
        )
    }
}

export default FlickerList