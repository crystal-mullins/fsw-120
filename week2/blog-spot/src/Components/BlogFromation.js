import React from "react"

function BlogPost(props) {
    
    return (
        <div className="blog-post">

            <p>{props.item.title}</p>
            <p>{props.item.subTitle}</p>
            <p>{props.item.author}</p>
            <p>{props.item.date}</p>
            
            
            
        </div>
    )
}

export default BlogPost