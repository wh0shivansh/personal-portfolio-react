import React from 'react';
import './Home.css';
import Header from '../Header/Header';
// import Skills from '../Skills/Skills';
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
import TrioMe from '../../Assets/me.png';
import FooterEnd from '../FooterEnd/FooterEnd';
import { Link } from 'react-router-dom';
import redGlow from '../../Assets/redglow.png';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const [isPreloader , setPreloader] = useState(false);

  setTimeout(()=>{
    setPreloader(true);
  },3400);


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

            <div className={isPreloader?'dn':'home-preloader'}>
                <p className={isPreloader?'dn':'home-preloader-p1'}>S</p>
                <p className={isPreloader?'dn':'home-preloader-p2'}>
                  <div></div>
                </p>
                <span className='preloader-bg'></span>

            </div>
            
            <div className="noise"></div>
            <Header />

            <section className="section-1 intro">
                <div className="intro-title">
                    <div className="intro-img-container">
                        <img src={Wings} alt="" />
                    </div>
                    <div className="s1-text">
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
                        <span className='about-me-label'>Find out more <Link to={'/about'}><span className='about-me-btn'>about me<span className='about-btn-line'></span></span></Link></span>
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
                        <span className='gi-title' id='t1'>Ecommerce Website <span className="color-red">( React Js)</span></span>
                        
                    </div>
                    <div className="grid-item">
                        <img src={banking} alt="" />
                        <span className='gi-title' id='t2'>QR Generator  <span className="color-red">( Javscript )</span></span>
                    </div>
                    <div className="grid-item">
                        <img src={priceTracker} alt="" />
                        <span className='gi-title' id='t3'>Amazon Price Tracker <span className="color-red">( Python )</span></span>
                    </div>
                    <div className="grid-item">
                        <img src={banking} alt="" />
                        <span className='gi-title' id='t4'>Banking System <span className="color-red">( C++/OOP )</span></span>
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

            {/* <Skills/> */}

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