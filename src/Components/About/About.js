import React from 'react';
import './About.css';
import Navigator from '../Navigator/Navigator';
import LineBreak from '../LineBreak/LineBreak';
import Header from '../Header/Header';
import Hero from '../../Assets/me.png';
import Certificate from '../../Assets/certificate1.png'
import Certificate2 from '../../Assets/certificate1.png'
import Certificate3 from '../../Assets/certificate4.png'
import Footer from '../Footer/Footer';
import FooterEnd from '../FooterEnd/FooterEnd';
import { useState } from 'react';


const About = () => {


  const [isPreloader , setPreloader] = useState(false);

  setTimeout(()=>{
    setPreloader(true);
  },3400);

  return (
    <div className='about'>

<div className={isPreloader?'dn':'home-preloader'}>
                <p className={isPreloader?'dn':'home-preloader-p1'}>S</p>
                <p className={isPreloader?'dn':'home-preloader-p2'}>
                  <div></div>
                </p>
                <span className='preloader-bg'></span>
            </div>
            <div className="noise"></div>

      <Header/>
      <section className='about-sec-1'>
          <p>Hello, I'm Shivansh!</p>
          <p>Developer and Designer</p>
      </section>

      <section className='about-sec-2'>
        <div className="sec-2-left">
          <div className="sec-2-img">
            <img src={Hero} alt="" />
            <div className="sec-2-img-cover"></div>
          </div>
        </div>
        <div className="sec-2-right">
          <p>bikes.&nbsp;&nbsp;food.&nbsp;&nbsp;gym.&nbsp;&nbsp;football</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint nostrum, sequi unde aut accusantium atque amet, veniam error sit enim maxime repellat. Optio, sequi quo corporis error, quidem pariatur fuga voluptatem omnis consequatur vero sint animi, eum officia accusantium saepe rerum porro maxime odio facilis dolorem. Harum, dolorem rerum.</p>
          <p>Code : : Record : : Upload</p>
        </div>
      </section>

    <span className='lb1'>
      <LineBreak/>
    </span>


      <div className="about-sec-3">
        <p className='sec-3-title'>Working Experience</p>
        <div className="work-exp-grid">


          <div className='work-exp-1'>
            <div className="work-exp-1-left">
              <p>CILLYFOX</p>
              <p>2021-2022</p>
            </div>
            <div className="work-exp-1-right">
              <p>web developer</p>
              <p><a href="https://cillyfox.com/shivansh">https://cillyfox.com</a></p>
            </div>
          </div>          
          
          
          <div className='work-exp-1'>
            <div className="work-exp-1-left">
              <p>CELLFIX</p>
              <p>2021-2022</p>
            </div>
            <div className="work-exp-1-right">
              <p>Free Lancing</p>
              <p><a href="https://cell-fix.in">https://cell-fix.in</a></p>
            </div>
          </div>          
          
          
          <div className='work-exp-1'>
            <div className="work-exp-1-left">
              <p>YOUTUBE</p>
              <p>2021-2022</p>
            </div>
            <div className="work-exp-1-right">
              <p>content creator</p>
              <p><a href="https://cell-fix.in">https://cell-fix.in</a></p>
            </div>
          </div>



        </div>
      </div>

<span className='lb2'>

    <LineBreak/>
</span>


        <section className='about-sec-4'>
            <p className='sec-4-title'>Awards</p>

            <div className="awards-grid">

              <div className="awards-item">
                <img src={Certificate} alt="" />
                <div className="award-cover"></div>
              </div>              
              
              <div className="awards-item">
                <img src={Certificate2} alt="" />
                <div className="award-cover"></div>
              </div>              
              
              <div className="awards-item">
                <img src={Certificate3} alt="" />
                <div className="award-cover"></div>
              </div>

            </div>
        </section>
<LineBreak/>

<FooterEnd/>

      <Navigator/>
    </div>
  )
}

export default About