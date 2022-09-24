import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Noise from '../../Assets/noise.gif';
import LineBreak from '../LineBreak/LineBreak';
import { useState,useEffect } from 'react';
import Certificate1 from '../../Assets/certificate1.png'


import ecommerce from '../../Assets/ecommerce.jpeg';
import banking from '../../Assets/banking.jpeg';
import priceTracker from '../../Assets/pricetracker.jpeg';

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Navigator from '../Navigator/Navigator';
import Footer from '../Footer/Footer';
import Arrow from '../../Assets/arrow.png'
import Wings from '../../Assets/wings.png';
import Homeabout from '../Homeabout/Homeabout';
import Icons from '../Icons/Icons';
import Quote from '../Quote/Quote';
import gsap from 'gsap';
import Flower from '../../Assets/flower2.svg';
import TrioMe from '../../Assets/me.png'
import FooterEnd from '../FooterEnd/FooterEnd';
import { Link } from 'react-router-dom';
import redGlow from '../../Assets/redglow.png';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  const boxRef = useRef();
  const textRef = useRef();

  const [isPreloader , setPreloader] = useState(false);

  setTimeout(()=>{
    setPreloader(true);
  },3000);

  useEffect(() => {
    gsap.to(boxRef.current, {
         opacity:1,
         duration:3,
        //  delay:3,
         top:"-0.5rem",
    });

    gsap.to(textRef.current, {
         opacity:1,
        //  delay:4,
         duration:1,
         top:"-5.3rem",
    });

    gsap.from('.s2r-img',{
        scale:0.1,
        // duration:1,
  })
  gsap.to('.s2r-img',{
        scale:0.9,
        duration:0.7,
        // opacity:0,
      scrollTrigger:{
          trigger:'.section-1',
        //   scrub:true,
        //   markers:true,
          start:"250px top",
          end:"300px"
      }
  })

  gsap.from('#skill1',{
    x:-100,
    opacity:0,
  })  
  gsap.from('#skill2',{
    x:100,
    opacity:0,
  }) 
  gsap.from('#skill3',{
    x:-100,
    opacity:0,
  }) 
  gsap.from('#skill4',{
    opacity:0,
    x:100,
  })
  gsap.to('#skill1',{
    x:0,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:'#skill1',
        start:"-700px",
        end:"-700px",
        // markers:true
    }
  })  
  gsap.to('#skill2',{
    x:0,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:'#skill1',
        start:"-500px",
        end:"-500px",
        // markers:true
    }
  })  
  gsap.to('#skill3',{
    x:0,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:'#skill1',
        start:"-500px",
        end:"-500px",
        // markers:true
    }
  })  
  gsap.to('#skill4',{
    opacity:1,
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:'#skill1',
        start:"-500px",
        end:"-500px",
        // markers:true
    }
  })

  gsap.from('.s2l-heading',{
    y:100,
    opacity:0,
    duration:1.2,

  })
  gsap.to('.s2l-heading',{
    opacity:1,
    y:0,
    scrollTrigger:{
        trigger:".s2l-heading",
        // markers:true,
        start:"-520px",
        end:"-500px"
    }
  })  
  gsap.from('.s2l-img',{
    scale:0.1,
    opacity:0,

  })
  gsap.to('.s2l-img',{
    opacity:1,
    scale:1,
    duration:1.2,
    scrollTrigger:{
        trigger:".s2l-heading",
        // markers:true,
        start:"-480px",
        end:"-470px"
    }
  })  
  gsap.from('.s2l-about',{
    y:50,
    opacity:0,

  })
  gsap.to('.s2l-about',{
    opacity:1,
    y:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".s2l-heading",
        // markers:true,
        start:"0px",
        end:"0px"
    }
  })  
  gsap.from('#t1',{
    x:-100,
    opacity:0,

  })
  gsap.to('#t1',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".section-3",
        start:"-200px",
    }
  })
  
  gsap.from('#t2',{
    x:100,
    opacity:0,

  })
  gsap.to('#t2',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#t1",
        start:"-200px",
    }
  })  
  
  gsap.from('#t3',{
    x:-100,
    opacity:0,

  })
  gsap.to('#t3',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#t2",
        start:"-200px",
    }
  })  
  
  gsap.from('#t4',{
    x:100,
    opacity:0,

  })
  gsap.to('#t4',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#t3",
        start:"-200px",
    }
  })  
  
  gsap.from('#t5',{
    x:-100,
    opacity:0,

  })
  gsap.to('#t5',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#t4",
        start:"-200px",
    }
  })  
  
  gsap.from('#t6',{
    x:100,
    opacity:0,

  })
  gsap.to('#t6',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:"#t5",
        start:"-200px",
    }
  })  
  
  gsap.from('.s4-title-left',{
    x:-100,
    opacity:0,

  })
  gsap.to('.s4-title-left',{
    opacity:1,
    x:0,
    duration:1.2,
    scrollTrigger:{
        trigger:".s4-title-left",
        start:"-600px",
    }
  }) 
  
  gsap.from('.s4l-bottom-img',{
    rotate:"-180deg",
    opacity:0,

  })
  gsap.to('.s4l-bottom-img',{
    opacity:1,
    rotate:'0deg',
    scrollTrigger:{
        trigger:".s4l-bottom-img",
        scrub:true,
        start:"-600px",
        end:"-400px"
    }
  })  
  
  gsap.from('.s4-right',{
    backgroundColor:"#161616",
  })
  gsap.to('.s4-right',{
    opacity:1,
    backgroundColor:"#feffff",
    duration:2,
    scrollTrigger:{
        trigger:".s4-right",
        start:"-500px",
        end:"200px"
    }
  })  
  
  gsap.from('.hire-me-btn',{
        y:78,
  })
  gsap.to('.hire-me-btn',{
    duration:1.2,
    y:0,
    scrollTrigger:{
        trigger:".hire-me-btn",
        start:"-550px",
    }
  })

  });

    const data = {
        app1: {
            name: 'codechef',
            rating: '3'
        }
    }

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className='home'>

            {/* <div className={isPreloader?'display-none':'home-preloader'}>
                <p className={isPreloader?'display-none':'home-preloader-p1'}>Shivansh</p>
                <p className={isPreloader?'display-none':'home-preloader-p2'}>Upadhyay</p>
            </div> */}
            
            <div className="noise"></div>
            <Header />

            <section className="section-1 intro">
                <div className="intro-title">
                    <div ref={boxRef} className="intro-img-container">
                        <img ref={boxRef} src={Wings} alt="" />
                    </div>
                    <div ref={textRef} className="s1-text">
                        <p>Birds can fly because</p>
                        <p>they have no limits</p>
                    </div>
                </div>
            </section>
            <Icons/>
            <Homeabout/>
            <section className="section-2 about">
                <div className="s2-left">
                    <div className="s2l-heading">
                        <p>magnificant</p>
                        <p>artist!</p>
                        {/* <span className='red-glow rg1'><img src={redGlow}></img></span> */}
                        {/* <span className='red-glow rg2'><img src={redGlow}></img></span> */}
                    </div>
                    <div className="s2l-img">
                        
                        {/* <img src={Robot} alt="" /> */}
                        <img src={TrioMe} alt="" />
                        {/* <FaCertificate/> */}
                    </div>
                    <div className="s2l-about">
                        <p><span className='a-big-text'>Exploring</span> <span className='gray-text'>the future technologies - </span> Aritficial Intelligence & Augmented Reality & Neural Networks </p>
                        <span className='about-me-label'>Find out more <Link to={'/about'}><span className='about-me-btn zindex-100'>about me<span className='about-btn-line'></span></span></Link></span>
                    </div>
                </div>
            {/* <LineBreak/> */}
                <div className="s2-right">
                    <div className="s2r-img">
                        {/* <img src={Play} alt="" /> */}
                    </div>
                    <div className="s2r-text">
                        <p id='skill1'>Web Developer <span className='line-btw'></span></p>
                        <p id='skill2'>Content Creator <span className='line-btw-long'></span></p>
                        <p id='skill3'>App Developer <span className='line-btw'></span></p>
                        <Link to={'/skills'}className="s2r-text-link"><p  id="skill4" >More Skills <span className='next-img-container'><img src={Arrow} alt="" /></span><span className='line-btw-black'></span></p></Link>
                    </div>
                </div>
            </section>



            {/* <div className='quote-1'>
            {/* <Quote
                quoteTop="AI is good untill"
                quoteBottom="it trains another!"
                /> */}
                {/* <img src={quote1}></img> */}
                {/* </div> */} 
            <LineBreak />




            <section className="section-3 projects">
                <span>Get an overview <br /></span> <span>of my latest projects</span>
            </section>

            <section className='section-3-add'>
                <div className="grid-container">
                    <div className="grid-item">
                        <img src={ecommerce} alt="" />
                        <span className='gi-title' id='t1'>Ecommerce Website</span>
                        
                    </div>
                    <div className="grid-item">
                        <img src={banking} alt="" />
                        <span className='gi-title' id='t2'>Ecommerce Website</span>
                    </div>
                    <div className="grid-item">
                        <img src={priceTracker} alt="" />
                        <span className='gi-title' id='t3'>Ecommerce Website</span>
                    </div>
                    <div className="grid-item">
                        <img src={ecommerce} alt="" />
                        <span className='gi-title' id='t4'>Ecommerce Website</span>
                    </div>
                    <div className="grid-item">
                    <img src={ecommerce} alt="" />
                        <span className='gi-title' id='t5'>Ecommerce Website</span>
                    </div>
                    <div className="grid-item">
                    <img src={ecommerce} alt="" />
                        <span className='gi-title' id='t6'>Ecommerce Website</span>
                    </div>
                </div>
            </section>
            <div className="more-projects">
                <span className='more-projects-label'><Link to={'/works'}><span className='more-projects-btn zindex-100'>more projects<span className='more-projects-btn-line'></span></span></Link></span>
            </div>


            {/* <Quote
                quoteTop="If you don't care"
                quoteBottom="then who will?"
            /> */}
            <LineBreak/>

            <section className="section-4 experience">
                <div className="s4-title">
                    <div className="s4-title-left">
                        <p>Experience</p>
                        <p>& Certifications</p>
                    </div>
                    <div className="s4-title-right"></div>
                </div>
            </section>

            <section className="s4-main">
                <div className="s4-left">
                    <div className="s4l-top">
                        <div className="s4-top-left">
                            <p>Recents!</p>
                            <p>Web Developer | <span className='color-red'>&nbsp;Intern</span></p>
                            <p className='underline-red'>CillyFox (Mumbai)</p>
                            <p>Handled day to day responsibilities including the frontend and backend using various languages like Javascript, PHP, SQL, Firebase, and more...</p>
                        </div>
                        <div className="s4-top-right">
                            {/* <img src={Certificate1} alt="" /> */}
                        </div>
                    </div>
                    <div className="s4l-bottom">
                        <div className="s4l-bottom-img">
                            <img src={Certificate1} />
                        </div>
                    </div>
                </div>
                <div className="s4-right">
                    <div>

                    <p>Glimps About</p>
                    <p>Work</p>
                    </div>
                    <ul>
                        <li>Hardworking</li>
                        <li>Time Puntual</li>
                        <li>Leadership</li>
                    </ul>
                    <p className='s4-right-p'>I always try to find the best solution for the problems. Try to integrate latest technoliges into my old projects. Have been a leader during a Hackathon and learns how a team work. Always puntual to time while working on an Internship project.</p>

                    <button>All Works</button>
                </div>
            </section>

            <Footer/>
            <FooterEnd/>

            <Navigator activeComponent="home" />
        </div>

    )
}

export default Home