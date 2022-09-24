import React from 'react';
import './FooterEnd.css';
import {FaEnvelope, FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import Star from '../../Assets/flower2.svg';

const FooterEnd = () => {
  return (
    <div className='footer-end'>

        <span className='footer-end-bg-img'>
        <img src={Star} alt="" />
        </span>






        <div className="footer-end-icons">

        <div className="hire-me-btn">
            <a href="mailto:shivanshupadhyay302@gmail.com" id='hire-me'><button>Hire Me</button></a>
        </div>


            <span>
            <a href="https://www.instagram.com/codewithshivansh_"><FaInstagram/></a>&nbsp;&nbsp;
            <FaFacebook/>&nbsp;&nbsp;

            <a href="mailto:shivanshupadhyay302@gmail.com"><FaEnvelope/></a>&nbsp;&nbsp;
            <a href="https://www.github.com/wh0shivansh"><FaGithub/></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/shivansh-upadhyay-bb594a240/"><FaLinkedin/></a>&nbsp;&nbsp;
            <a href="https://www.youtube.com/channel/UCtZPPJtJADBTK7JpqcaFJTA"><FaYoutube/></a>
            </span>

            <span className='footer-end-line'></span>
        </div>

        <div className="copyright-end">
            <p>&copy; copyright | 2022 - Shivansh Upadhyay</p>
        </div>
    </div>
  )
}

export default FooterEnd