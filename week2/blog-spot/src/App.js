import React from 'react';
import Heading from './Components/Header'
import Navbar from './Components/Navbar'
import BlogList from './Components/BlogList'
// import './App.css';

function App(props) {
  return (
    <div >
     
      <Navbar />
      <Heading />
      
      <BlogList Blogs={props.bloggerData}
     />
    </div>
  );
}

export default App;
