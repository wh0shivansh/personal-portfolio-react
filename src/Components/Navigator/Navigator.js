import React, { useEffect, useRef } from 'react';
import './Navigator.css';
import {VscHome} from 'react-icons/vsc';
import {GrUserManager} from 'react-icons/gr';
import {MdWorkOutline} from 'react-icons/md';
import {BsCodeSquare, BsMusicNote} from 'react-icons/bs';
import { BsMusicPlayer } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigator = (props) => {
  function onClickHandler(){
    window.scrollTo(0,0);
  }

  return (
    <div className="navigator">
        <div className="navigator-container">
            <ul>
                <li onClick={onClickHandler} id="home"><Link to="/"><span className="icons"><VscHome size={25}/></span>Home</Link></li>
                <li onClick={onClickHandler}><Link to="/about"><span className='icons'><GrUserManager size={23}/></span>About</Link></li>
                <li onClick={onClickHandler}><Link to="/skills"><span className='icons'><BsCodeSquare size={22}/></span>Skills</Link></li>
                <li onClick={onClickHandler}><Link to="/works"><span className='icons'><MdWorkOutline size={25}/></span>Works</Link></li>
                <li onClick={onClickHandler} ><Link to="/blog"><span className='icons music-icon'><BsMusicNote size={20}/></span>Music</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigator