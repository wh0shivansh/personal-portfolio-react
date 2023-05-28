import React from 'react'
import Navigator from '../Navigator/Navigator'
import Header from '../Header/Header'
import Loading from '../../Assets/comingsoon.gif';
import './Works.css';
import ecommerce from '../../Assets/ecommerce.jpeg';
import LineBreak from '../LineBreak/LineBreak';
import FooterEnd from '../FooterEnd/FooterEnd';
import { useState } from 'react';

const Works = () => {
  const [isPreloader , setPreloader] = useState(false);

  setTimeout(()=>{
    setPreloader(true);
  },3400);


  return (
    <div className='works'>
<div className={isPreloader?'dn':'home-preloader'}>
                <p className={isPreloader?'dn':'home-preloader-p1'}>S</p>
                <p className={isPreloader?'dn':'home-preloader-p2'}>
                  <div></div>
                </p>
                <span className='preloader-bg'></span>

            </div>
      <div className="noise"></div>
    <Header/>

      <section className="work-sec-1">
        <p>A small glimp of, <br />all my works, enjoy!</p>
      </section>

    <div className='wlb-1 num1'>
    <LineBreak/>
    </div>

      <section className='work-card'>



          <div className="work-card-container">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Internship</p>
                  <p>cillyfox</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>          
          
          <div className='wlb-1'>
    <LineBreak/>
    </div>
          
          <div className="work-card-container-rev">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>FreeLancing</p>
                  <p>cellfix</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>

          
          <div className='wlb-1'>
    <LineBreak/>
    </div>

    <div className="work-card-container">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Banking System</p>
                  <p>C++</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>   

                    
          <div className='wlb-1'>
    <LineBreak/>
    </div>

          <div className="work-card-container-rev">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>QR Generator</p>
                  <p>Javscript</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>

          
          <div className='wlb-1'>
    <LineBreak/>
    </div>

    <div className="work-card-container">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Dragon Sage</p>
                  <p>Javascript</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button><a href='https://wh0shivansh.github.io/dragon-sage/'>Visit Project</a></button>
              </div>
          </div>   

                    
          <div className='wlb-1'>
    <LineBreak/>
    </div>

          <div className="work-card-container-rev">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Amazon Price Tracker</p>
                  <p>cellfix</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>

          
          <div className='wlb-1'>
    <LineBreak/>
    </div>

    <div className="work-card-container">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Hackathon (medObtain)</p>
                  <p>HTML | CSS | JS</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>   


          <div className='wlb-1'>
    <LineBreak/>
    </div>

          <div className="work-card-container-rev">
              <div className="work-card-left">
                <div className="work-card-img">
                  <img src={ecommerce} alt="" />
                  <span className='dot1 dot'></span>
                  <span className='dot2 dot'></span>
                  <span className='dot3 dot'></span>
                </div>
              </div>
              <div className="work-card-right">
                  <p>Business Card</p>
                  <p>AR</p>
                  <p>First freeLancing project for a website where I have used ' React ' framework to design the frontend. </p>
                  <button>Visit Project</button>
              </div>
          </div>



      </section>


      <Navigator/>
    </div>
  )
}

export default Works