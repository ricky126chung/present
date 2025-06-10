import logo from '../logo.svg';
import '../App.css';
import LoadingVideo from '../components/LoadingVideo';
import React, { useState } from 'react';
import netflixOpenScene from '../assets/netflixOpenScene.mp4';

function Home() {
    const [showContent, setShowContent] = useState(false);

    const handleVideoEnd = () => {
        setShowContent(true);
    };

    return (
        <div className="App" style={{ position: 'relative' }}>
            <header className="App-header" style={{ 
              opacity: showContent ? 1 : 0, 
              transition: 'opacity 2s' 
            }}>
                Test v0.1
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
            <LoadingVideo videoSrc={netflixOpenScene} onVideoEnd={handleVideoEnd} />
        </div>
    );
}

export default Home;