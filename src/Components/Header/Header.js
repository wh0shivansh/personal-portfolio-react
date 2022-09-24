import React from 'react';
import './Header.css';
import Music from '../../Assets/music.png';
import myMusic from '../../Assets/enough.mp3';
import { useState } from 'react';


const Header = () => {

    const [isActive,setActive] = useState(false);

    const handleMusicTrigger=()=>{
        if(!isActive){
            document.querySelector('#my-song').play();
        }
        else{
            document.querySelector('#my-song').pause();
            document.querySelector('#my-song').currentTime = 0;
        }
        setActive(!isActive);
    }

    return (
        <header>
            <div className="logo">
                <div className="logo-box"><p>S</p></div>
                <div className="logo-name">Shivansh Upadhyay</div>
            </div>
            <div className="menu">
                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}

export default Header