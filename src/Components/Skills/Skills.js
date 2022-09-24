import React from 'react';
import './Skills.css';
import Loading from '../../Assets/comingsoon.gif';
import Navigator from '../Navigator/Navigator';


const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-container'>
        <img src={Loading}></img>
      </div>
      <Navigator/>
    </div>
  )
}

export default Skills