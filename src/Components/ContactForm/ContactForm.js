import React, { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail=(e)=>{

        e.preventDefault();
        emailjs.sendForm('service_6xh9pnt', 'template_bqot117', form.current, 'Nxjq8h-RSswWEa0v_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          console.log("Email Sent");
    }

    return (
        <div className="contact-form">
            <div className="form-title">Contact Me</div>
            <div className="form-title-2">Contact Me</div>
            <form onSubmit={sendEmail} ref={form}>
                <input type="name" placeholder='Name' name='name'/>
                <input type="email" placeholder='Email' name='email' />
                <input type="subject" placeholder='Subject' name='subject'/>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='submit-btn' type='send'>Send Message!</button>
            </form>
        </div>
    )
}

export default ContactForm