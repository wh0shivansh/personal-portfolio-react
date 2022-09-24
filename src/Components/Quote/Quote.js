import React from 'react';
import './Quote.css';
import Frame from '../../Assets/doubletriangle.png';

const Quote = (props) => {
  return (
    <div className='quote'>
        <img src={Frame} alt="" />
        <p>{'"'+props.quoteTop}<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.quoteBottom+'"'}</p>
    </div>
  )
}

export default Quote