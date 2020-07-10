import React, {Component} from 'react'
import BadgeCard from './BadgeCard'


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
                favoriteFood={card.favoriteFood}
                textArea={card.textArea}
                handleDelete={this.props.handleDelete}
                
                
                />
            )
        })
        return(
                <div>
                    
                    {mappedCards}
            </div>
        )
    };
}

export default BadgeList