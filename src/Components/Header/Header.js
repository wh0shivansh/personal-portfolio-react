import React from 'react';
import './Header.css';
import Music from '../../Assets/music.png';
import myMusic from '../../Assets/enough.mp3';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    const [isActive,setActive] = useState(false);
    const handleNavbar=()=>{
        if(isActive == false){
            setActive(true);
        }
        else{
            setActive(false);
        }
    }

    return (
        <header>
            <div className="logo">
                <div className="logo-box"><p>S</p></div>
                <div className="logo-name">Shivansh Upadhyay</div>
            </div>
            <div className="menu">
                <div className="hamburger" id='hamburger' onClick={handleNavbar}>
                    <div className={isActive?"hamburger-black ham1":"hamburger-white"}></div>
                    <div className={isActive?"hamburger-black ham2":"hamburger-white"}></div>
                    <div className={isActive?"hamburger-black ham3":"hamburger-white"}></div>
                </div>

                <div className={isActive?"nav-open":"nav-close"}>
                    <div className="nav-item">
                        <p onClick={handleNavbar}><Link to={'/'}>home</Link></p>
                        <p onClick={handleNavbar}><Link to={'/about'}>about</Link></p>
                        <p onClick={handleNavbar}><Link to={'/skills'}>skills</Link></p>
                        <p onClick={handleNavbar}><a href="https://www.instagram.com/codewithshivansh_">instagram -</a><a href="https://www.github.com/wh0shivansh"> github - </a><a href="https://www.linkedin.com/in/shivansh-upadhyay-bb594a240/">linkedin</a></p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header