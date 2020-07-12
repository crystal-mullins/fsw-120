import React from 'react'
// import bloggerData from './Components/BlogData'
// import BlogPost from './Components/BlogPost'



function BlogCard(props)  {
    
    return(
        <div> 
            <h1 style={{fontWeight:"bold"}}>{props.title} </h1>
        <div className="wrapper">
                <p>{props.subTitle}</p>
                <p>{props.author}</p>
    <p style={{color:"blue"}}>{props.date} </p>
                </div>
        </div>
);

}

export default BlogCard;