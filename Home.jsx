
// import ReactPlayer from 'react-player';
// import NavBar from "../components/NavBar"
// import { Container } from 'react-bootstrap';

import { useEffect } from "react";
export default function Home(){
    useEffect(() => {
        // Set up the full screen div when component mounts
        const fullscreenDiv = document.getElementById('fullscreen-div');
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = window.innerHeight; // Using window.innerHeight to get viewport height

        fullscreenDiv.style.width = bodyWidth + 'px';
        fullscreenDiv.style.height = '100vh'; // Setting height to 100vh

        // Clean up function to reset styles when component unmounts
        return () => {
            fullscreenDiv.style.width = '';
            fullscreenDiv.style.height = '';
        };
    }, []);

    return (
        
        <div style={{ height: '100%', margin: 0, padding: 0 }}>
                     
            <div
                id="fullscreen-div"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    width: '100%',
                    height: '100vh', // Keep width 100% and set height to 100vh
                   
                }}
            >
                <video 
                    src="/videos/3.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    style={{ 
                        width: '100%', // Set video width to 100% of its container
                        height: '100%', // Set video height to 100% of its container
                        objectFit: 'cover' // Ensure the video covers the entire container
                    }} 
                ></video>
            </div>
        </div>
    );
};

