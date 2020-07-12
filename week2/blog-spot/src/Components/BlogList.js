import React, {Component} from 'react'

import bloggerCard from './BlogData'
import BlogCard from './BlogCard'

class BlogList extends Component {
    
    render(){
        console.log(this.props)
        
        const mappedCards = bloggerCard.map(card =>
        
                < BlogCard
                key={card.title}
                title={card.title}
                subTitle={card.subTitle}
                author={card.author}
                date={card.date}
                />
        )
        
        return(
                <div>
                    
                    {mappedCards}
            </div>
        )
    }
}


export default BlogList