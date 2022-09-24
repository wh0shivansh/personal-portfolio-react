import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Maps from '../../Assets/maps.png';
import LineBreak from '../LineBreak/LineBreak';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <LineBreak/>
      <ContactForm/>
      <div className="footer-img-bg"></div>
    </div>
  )
}

export default Footer