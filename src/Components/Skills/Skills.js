import React from 'react';
import './Skills.css';
import Loading from '../../Assets/comingsoon.gif';
import Navigator from '../Navigator/Navigator';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
// import { TagCloud } from 'react-tagcloud'


const Skills = () => {
  
  useEffect(()=>{
    const TagCloud = require('TagCloud');
  const container = '#tgcld';
  const texts = [
      'HTML', 'CSS', 'JAVASCRIPT',
      'NODE JS', 'REACT', 'PHP',
      'C/C++', 'JAVA', 'PYTHON',
      'FLUTTER', 'FLASK', "PROLOG","ANGULAR JS","GIT", "GITHUB",
       "LINUX", "C#", "EXPRESS JS", "OOP",
    ];
    const options = {
      radius:300,
      containerClass:'tagcloud1'
    };
    TagCloud(container, texts,options);
  })

  const [isPreloader , setPreloader] = useState(false);

  setTimeout(()=>{
    setPreloader(true);
  },3400);
  
  return (
    <div className='skills'>
      <div className={isPreloader?'dn':'home-preloader'}>
                <p className={isPreloader?'dn':'home-preloader-p1'}>S</p>
                <p className={isPreloader?'dn':'home-preloader-p2'}>
                  <div></div>
                </p>
                <span className='preloader-bg'></span>
            </div>
      <div className="noise"></div>
      <Header/>
    <div className="skills-container">
      <div className="skills-left">
        <p>Skills & <br />Experience</p>

        <p>The main area of my interest is full stack Web Development.
        </p>
        <p>I'm very much intersted in applying Machine Learning and Artificial Intelligence and Augmented Reality into Web and Mobile Applications</p>

        <p>Visit my  <span style={{color:"goldenrod"}}>linkedin</span> profile or  <span style={{color:"goldenrod"}}>github</span> for more.</p>
      </div>

      
      <div className="skills-right">
        <div id='tgcld' className="tagcloud1">
        </div>
      </div>
    </div>
      <Navigator/>
    </div>
  )
}

export default Skills