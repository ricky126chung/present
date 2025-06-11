import '../App.css';
import LoadingVideo from '../components/LoadingVideo';
import netflixOpenScene from '../assets/netflixOpenScene.mp4';
import '../css/homePage.css';
import Top from './Top';
import Home from './Home.js';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from './Login.js';
function Main() {
  const [showContent, setShowContent] = useState(true);

  const handleVideoEnd = () => {
    setShowContent(true);// You can add logic here if needed when the video ends
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <Top />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    {showContent && <LoadingVideo videoSrc={netflixOpenScene} onVideoEnd={handleVideoEnd} />}
    </ChakraProvider>
  );
}

export default Main;
