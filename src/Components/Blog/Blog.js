import React from 'react';
import './Blog.css';
import Loading from "../../Assets/comingsoon.gif";
import Navigator from '../Navigator/Navigator';

const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-container">
        <img src={Loading} alt="" />
      </div>
      <Navigator/>
    </div>
  )
}

export default Blog