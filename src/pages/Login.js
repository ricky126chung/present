import '../App.css';
import React, { useState } from 'react';
import '../css/homePage.css';
import { ChakraProvider,defaultSystem,
  Grid,
  GridItem,
 } from '@chakra-ui/react';
function Login() {
    const [showContent, setShowContent] = useState(false);

    const handleVideoEnd = () => {
        setShowContent(true);
    };
    return (
        <header className="App-header" style={{ opacity: 1}}>
            Test v0.1
            <p>
                Login
            </p>
        </header>
    );
}

export default Login;