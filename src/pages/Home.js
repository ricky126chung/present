import logo from '../logo.svg';
import '../App.css';
import LoadingVideo from '../components/LoadingVideo';
import React, { useState } from 'react';
import netflixOpenScene from '../assets/netflixOpenScene.mp4';
import '../css/homePage.css';
import Top from './Top';
import Netflix_logo from '../assets/Netflix_logo.jpg';
import { ChakraProvider,defaultSystem,
  Grid,
  GridItem,
 } from '@chakra-ui/react';
function Home() {

    return (
        <div className="page-content">
            <header className="App-header">
                Test v0.1
                <p>
                    HomePage
                </p>
                <img src={Netflix_logo} alt="Netflix Logo" className="logo" style={{ height: '100px', width: 'auto', maxWidth: '170px' }} />
            </header>
        </div>
    );
}

export default Home;