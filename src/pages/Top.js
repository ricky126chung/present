import React from 'react'
import '../App.css';
import '../css/homePage.css';
import Netflix_logo from '../assets/Netflix_logo.jpg';
function Top() {


    return (
        <div className="logo-container" style={{ position: 'absolute', top: '10px', left: '10px', height: '50px', zIndex: 1 }}>
            <a href='/' target="_parent">
                <img src={Netflix_logo} alt="Netflix Logo" className="logo" style={{ height: '100%', width: 'auto', maxWidth: '150px' }} />
            </a>
        </div>
    );
}

export default Top;