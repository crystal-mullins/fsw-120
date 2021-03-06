import React, {Component} from 'react'
import BadgeCard from './BadgeCard'
// import FormBadge from './FormBadge'

class BadgeList extends Component {
    

    
    render(){
        console.log(this.props)
        
        const mappedCards = this.props.nameBadges.map( (card, i) => {
            return(
                < BadgeCard
                key={i}
                index={i}
                firstName={card.firstName}
                lastName={card.lastName}
                phone={card.phone}
                email={card.email}
                birthPlace={card.birthPlace}
                favFood={card.favFood}
                handleDelete={this.props.handleDelete}
                
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

export default BadgeList