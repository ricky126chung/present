import React from 'react'
import '../App.css';
import '../css/homePage.css';
import Netflix_logo from '../assets/Netflix_logo.jpg';
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/top.css';
function Top() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const [fadePath, setFadePath] = useState(location.pathname);

    useEffect(() => {
        setFadePath(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <div
                className="inline-block"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    height: '65px',
                    background: '#000',
                    zIndex: 1000
                }}
            >
                <div className="logo-container" style={{ height: '50px', zIndex: 1, paddingRight: '80px' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        <img src={Netflix_logo} alt="Netflix Logo" className="logo" style={{ height: '100%', width: 'auto', maxWidth: '170px' }} />
                    </Link>
                </div>
                <div style={{ zIndex: 1, flex: 1 }}>
                    <nav style={{ display: 'flex', gap: '50px', alignItems: 'center', height: '100%' }}>
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/tv-shows', label: 'TV Show' },
                            { path: '/movies', label: 'Movies' },
                            { path: '/popular', label: 'News & Popular' },
                            { path: '/myList', label: 'My List' },
                            { path: '/browse', label: 'Browse by Languages' },
                        ].map(({ path, label }) => (
                            <span key={path} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                <Link
                                    to={path}
                                    className={fadePath === path ? 'fade-in' : 'fade-out'}
                                    style={{
                                        color: isActive(path) ? 'white' : 'rgba(255, 255, 255, 1)',
                                        textDecoration: 'none',
                                        fontSize: '1.2em',
                                        padding: '8px 0'
                                    }}
                                >
                                    {label}
                                </Link>
                            </span>
                        ))}
                    </nav>
                </div>
                <div style={{ height: '50px', zIndex: 1, paddingRight: '30px', display: 'flex', alignItems: 'center',fontSize: '1.2em', }}>
                    Test v0.1
                </div>
                <div style={{ height: '50px', zIndex: 1, paddingRight: '30px', display: 'flex', alignItems: 'center' }}>
                    <Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ display: 'block' }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                        </svg>
                    </Link>
                </div>
                <div style={{ height: '50px', zIndex: 1, paddingRight: '30px', display: 'flex', alignItems: 'center',fontSize: '1.2em', }}>
                    kids
                </div>
                <div className='pointer' style={{ height: '50px', zIndex: 1, paddingRight: '30px', display: 'flex', alignItems: 'center' }}>
                    
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            style={{ display: 'block' }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22c1.1 0 2-.9 2-2H10a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a2 2 0 10-4 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" />
                        </svg>
                </div>
            </div>
        </>
    );
}

export default Top;