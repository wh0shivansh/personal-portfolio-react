import React from 'react';
import './Icons.css';
import { useRef,useEffect } from 'react';
import {FaInstagram} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Icons = () => {

  return (
    <div className='social-icons'>
        <p className='trigger'>
            <span></span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/codewithshivansh_"><FaInstagram/></a>&nbsp;&nbsp;
            {/* <FaFacebook/> */}
            <a href="mailto:shivanshupadhyay302@gmail.com"><FaEnvelope/></a>&nbsp;&nbsp;
            <a href="https://www.github.com/wh0shivansh"><FaGithub/></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/shivansh-upadhyay-bb594a240/"><FaLinkedin/></a>&nbsp;&nbsp;
            <a href="https://www.youtube.com/channel/UCtZPPJtJADBTK7JpqcaFJTA"><FaYoutube/></a>
        </p>
    </div>
  )
}

export default Icons