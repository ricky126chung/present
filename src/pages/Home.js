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
        <div className="page-content" style={{ display: 'flex', justifyContent: 'center', zIndex: 2}}>
            <header style={{ width: '100%' }}>
                <div style={{ width: '100%', height: "700px", backgroundColor: 'grey' , marginBottom:'10px'}}>
                    Main
                </div>
                <div style={{textAlign:'left', fontSize: '1.6em', fontWeight:'bold', paddingLeft:'2px',marginTop: '20px' }}>Today's Top Pick for You</div>
                <div
                    className='slideBar'
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        flexWrap: 'nowrap',
                        width: '100%',
                        maxWidth: '100vw',
                        boxSizing: 'border-box',
                        zIndex: 2,
                        pointerEvents: 'auto',
                        scrollbarWidth: 'none', '-ms-overflow-style': 'none', '::-webkit-scrollbar': { display: 'none' } ,
                    }}
                >
                    {files.map((video, index) => (
                        <div
                            key={index}
                            style={{
                                flex: '0 0 auto',
                                width: '400px',
                                height: '225px',
                                backgroundColor: 'grey',
                                margin: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                            }}
                        >
                            {video.title}
                        </div>
                    ))}
                </div>
                <div style={{textAlign:'left', fontSize: '1.6em', fontWeight:'bold', paddingLeft:'2px',marginTop: '20px' }}>Get In on the Action</div>
                <div
                    className='slideBar'
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        flexWrap: 'nowrap',
                        width: '100%',
                        maxWidth: '100vw',
                        boxSizing: 'border-box',
                        zIndex: 2,
                        pointerEvents: 'auto',
                        scrollbarWidth: 'none', '-ms-overflow-style': 'none', '::-webkit-scrollbar': { display: 'none' } ,
                        
                    }}
                >
                    {files.map((video, index) => (
                        <div
                            key={index}
                            style={{
                                flex: '0 0 auto',
                                width: '400px',
                                height: '225px',
                                backgroundColor: 'grey',
                                margin: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2,
                            }}
                        >
                            {video.title}
                        </div>
                    ))}
                </div>
                {/* <Grid 
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
                </Grid> */}
            </header>
        </div>
    );
}

export default Home;