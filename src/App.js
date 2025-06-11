
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useMemo } from 'react';
import Main from './pages/Main';
import { ChakraProvider } from '@chakra-ui/react';
function App() {

    return (
      <div className="App">
      <Main/>
      </div>
    );
}

export default App;
