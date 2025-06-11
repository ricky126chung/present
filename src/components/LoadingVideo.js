import { useState, useEffect, useRef } from 'react';

function LoadingVideo({ videoSrc, onVideoEnd }) {
    const [showVideo, setShowVideo] = useState(true);
    const [isFront, setIsFront] = useState(true);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setShowVideo(false);
        setTimeout(() => {
            onVideoEnd();
            setIsFront(false);
        }, 1000); // Wait for 1 second before transitioning to the main content
    };

    useEffect(() => {
        const video = videoRef.current;
        video.addEventListener('ended', handleVideoEnd);

        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, [onVideoEnd]);


    return (
        <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: isFront ? 9999 : 0, //default is front
            backgroundColor: 'black', 
            opacity: showVideo ? 1 : 0, 
            transition: 'opacity 1.5s' 
        }}>
            <video ref={videoRef} autoPlay muted playsInline 
            style={{ 
                position: 'absolute', 
                top: 0, left: 0, width: '100%', height: '100%', 
                objectFit: 'cover', zIndex: 1, opacity: showVideo ? 1 : 0,   
            }}>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
    );
}

export default LoadingVideo;