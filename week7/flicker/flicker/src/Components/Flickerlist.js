// import React, {Component} from './node_modules/react'
import React, {Component} from 'react'
import FlickersCard from './Components/FlickerCard'
// import flickersData from './Components/FlickerData'

// import FormBadge from './FormBadge'

class FlickerList extends Component {
    

    
    render(){
        console.log(this.props)
        
        const mappedCards = this.props.flickersCard.map( (card, i) => {
            return(
                < FlickerCard
                key={i}
                index={i}
                author={card.author}
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