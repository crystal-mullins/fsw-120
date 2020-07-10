import React from 'react'
// import bloggerData from './Components/BlogData'
// import BlogPost from './Components/BlogPost'



const BlogCard = ({title, subTitle, arthor, date }) => {
    
    return(
        <div> 
            <h1 style={{backgroundColor: "red"}}>Blogs{title} </h1>
        <div className="wrapper">
                <p>{subTitle}</p>
                <p>{arthor}</p>
                <p>{date}</p>
                </div>
        </div>
);

}

export default BlogCard;