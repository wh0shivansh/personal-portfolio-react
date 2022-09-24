import React, { useEffect, useRef } from 'react';
import './Navigator.css';
import {VscHome} from 'react-icons/vsc';
import {GrUserManager} from 'react-icons/gr';
import {MdWorkOutline} from 'react-icons/md';
import {BsCodeSquare} from 'react-icons/bs';
import {TbNotes} from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigator = (props) => {


  return (
    <div className="navigator">
        <div className="navigator-container">
            <ul>
                <li><Link to="/"><span className="icons"><VscHome size={25}/></span>Home</Link></li>
                <li><Link to="/about"><span className='icons'><GrUserManager size={23}/></span>About</Link></li>
                <li ><Link to="/blog"><span className='icons'><TbNotes size={23}/></span>Blog</Link></li>
                <li><Link to="/works"><span className='icons'><MdWorkOutline size={25}/></span>Works</Link></li>
                <li><Link to="/skills"><span className='icons'><BsCodeSquare size={22}/></span>Skills</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigator