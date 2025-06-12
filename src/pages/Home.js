import logo from '../logo.svg';
import '../App.css';
import LoadingVideo from '../components/LoadingVideo';
import React, { useState } from 'react';
import netflixOpenScene from '../assets/netflixOpenScene.mp4';
import '../css/homePage.css';
import Top from './Top';
import Netflix_logo from '../assets/Netflix_logo.jpg';
import videoList from '../videoList.json';
import { ChakraProvider,defaultSystem,
  Grid,
  GridItem,
 } from '@chakra-ui/react';
function Home() {
    const files = videoList

    return (
        <div className="page-content" style={{ display: 'flex', justifyContent: 'center'}}>
            <header className="App-header" style={{ width: '100%' }}>
                <div style={{ width: '100%', height: "700px", backgroundColor: 'grey' , marginBottom:'50px'}}>
                    Main
                </div>
                <Grid 
                    templateRows={'repeat(9, 1fr)'} 
                    templateColumns='repeat(3, 1fr)' 
                    gap={4} 
                    width="100%"
                    justifyContent="center"
                    alignItems='center'
                    marginLeft= '70px'
                >
                {files.map((video, index) => {
                    return (
                    <GridItem colSpan={1} key={index}> 
                        <div style={{ width: '700px', height: '393.75px', backgroundColor: 'grey' }}>
                            {video.title}
                        </div>
                    </GridItem>
                    )
                })}
                </Grid>
            </header>
        </div>
    );
}

export default Home;