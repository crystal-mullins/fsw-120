import React, {Component} from 'react'

import BlogCard from './BlogCard'


class BlogList extends Component {
    
    render(){
        console.log(this.props)
        
        const mappedCards = this.props.bloggerCard.map((card) => {
            return(
                < BlogCard
                title={BlogCard.title}
                subTitle={BlogCard.subTitle}
                arther={BlogCard.author}
                date={BlogCard.date}
                
                
                
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

export default BlogList