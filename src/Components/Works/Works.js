import React from 'react'
import Navigator from '../Navigator/Navigator'
import Loading from '../../Assets/comingsoon.gif';
import './Works.css';

const Works = () => {
  return (
    <div className='works'>
      <div className='works-container'>
        <img src={Loading}></img>
      </div>
      <Navigator/>
    </div>
  )
}

export default Works