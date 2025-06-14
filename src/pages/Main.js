import '../App.css';
import LoadingVideo from '../components/LoadingVideo';
import netflixOpenScene from '../assets/netflixOpenScene.mp4';
import '../css/homePage.css';
import Top from './Top';
import Home from './Home.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React, { useState,useRef } from 'react';
import Login from './Login.js';
function Main() {
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();
  const nodeRef = useRef(null);
  const handleVideoEnd = () => {
    setShowContent(true);// You can add logic here if needed when the video ends
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <div className="main-container">
        <div style={{ paddingBottom: '65px' }}>
          <Top />
        </div>
      <TransitionGroup component={null}>
        <CSSTransition
           key={location.key}
            timeout={1500}
            classNames={{
              enter: 'transition-enter',
              enterActive: 'transition-enter-active',
              exit: 'transition-exit',
              exitActive: 'transition-exit-active'
            }}
            nodeRef={nodeRef}
            unmountOnExit
        >
          <div className="page-wrapper" ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/tv-shows" element={<Login />} />
              <Route path="/movies" element={<Login />} />
              <Route path="/popular" element={<Login />} />
              <Route path="/myList" element={<Login />} />
              <Route path="/browse" element={<Login />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    {showContent && <LoadingVideo videoSrc={netflixOpenScene} onVideoEnd={handleVideoEnd} />}
    </div>
    </ChakraProvider>
  );
}

export default Main;
